import React, { useEffect, useRef } from "react";

/**
 * Modal Component Props
 *
 * @interface ModalProps
 *
 * @description
 * Props for the Modal component with focus trapping and accessibility
 *
 * @example
 * ```tsx
 * <Modal className="max-w-2xl p-6">
 *   <h2>Modal Title</h2>
 *   <p>Modal content here</p>
 * </Modal>
 * ```
 */
export interface ModalProps {
  /**
   * Content to be rendered inside the modal
   */
  children?: React.ReactNode;

  /**
   * Unique identifier for the modal
   */
  id?: string;

  /**
   * Additional CSS classes for the modal container (Tailwind CSS supported)
   * @default "max-w-lg"
   * @example "max-w-4xl p-8"
   */
  className?: string;
}

/**
 * Modal Component
 *
 * @component
 * @description
 * A versatile modal dialog component with focus trapping for accessibility.
 * Automatically manages focus and keyboard navigation (Tab, Shift+Tab, Escape).
 * Works seamlessly with dropdown components and other interactive elements.
 *
 * The modal creates a dark overlay and centers its content on the screen.
 * Focus is trapped within the modal, preventing users from tabbing to elements
 * behind it. Pressing Escape can trigger the close action (requires implementation).
 *
 * @param {ModalProps} props - Component props
 * @returns {JSX.Element} Rendered modal dialog
 *
 * @example
 * ```tsx
 * import { Modal, Button, Input } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function MyComponent() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *
 *       {isOpen && (
 *         <Modal className="max-w-2xl p-6">
 *           <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
 *           <Input label="Name" placeholder="Enter your name" />
 *           <Input label="Email" type="email" placeholder="your@email.com" />
 *           <div className="flex justify-end gap-2 mt-6">
 *             <Button onClick={() => setIsOpen(false)}>Cancel</Button>
 *             <Button className="bg-primary-500 text-white px-4 py-2 rounded">
 *               Save
 *             </Button>
 *           </div>
 *         </Modal>
 *       )}
 *     </>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Large modal with custom styling
 * <Modal className="max-w-6xl h-[80vh] p-8 overflow-y-auto">
 *   <div className="grid grid-cols-2 gap-6">
 *     Modal content here
 *   </div>
 * </Modal>
 * ```
 */
const Modal: React.FC<ModalProps> = ({
  children,
  id = "",
  className = "",
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    // Focus the modal when it opens
    modal.focus();

    // Get all focusable elements within the modal
    const getFocusableElements = () => {
      const selectors = [
        'input:not([disabled]):not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'textarea:not([disabled]):not([tabindex="-1"])',
        'select:not([disabled]):not([tabindex="-1"])',
        'a[href]:not([tabindex="-1"])',
        '[tabindex]:not([tabindex="-1"])',
      ];

      return modal.querySelectorAll(selectors.join(",")) as NodeListOf<HTMLElement>;
    };

    // Handle tab key navigation to trap focus within modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        // Check if a dropdown is currently open by looking for dropdown elements
        const openDropdown =
          document.querySelector('[role="option"]') ||
          document.querySelector(".z-50"); // Dropdown portal elements

        // If dropdown is open, let it handle its own tab navigation
        if (openDropdown) {
          return;
        }

        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!e.shiftKey && document.activeElement === lastElement) {
          // Tab forward from last element - go to first
          e.preventDefault();
          firstElement?.focus();
        } else if (e.shiftKey && document.activeElement === firstElement) {
          // Shift+Tab backward from first element - go to last
          e.preventDefault();
          lastElement?.focus();
        }
      }

      // Close modal on Escape key (you can add an onClose callback here)
      if (e.key === "Escape") {
        e.preventDefault();
        // Implement your close logic here
      }
    };

    // Add event listeners
    modal.addEventListener("keydown", handleKeyDown);

    // Focus the first focusable element when modal opens
    setTimeout(() => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }, 100);

    // Cleanup
    return () => {
      modal.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      {...props}
      role="dialog"
      aria-modal="true"
      className="fixed text-black inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      {/* Modal Container */}
      <div
        ref={modalRef}
        id={id}
        tabIndex={-1}
        className={`bg-white rounded-lg shadow-xl w-full mx-4 sm:mx-auto overflow-y-auto focus:outline-none ${
          className || "max-w-lg"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
