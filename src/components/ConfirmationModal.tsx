import React from "react";
import Button from "./Button";

/**
 * ConfirmationModal Component Props
 *
 * @interface ConfirmationModalProps
 *
 * @description
 * Props for the ConfirmationModal component used for user confirmations
 */
export interface ConfirmationModalProps {
  /**
   * Controls modal visibility
   */
  isOpen: boolean;

  /**
   * Close/cancel handler
   */
  onClose: () => void;

  /**
   * Confirmation/submit handler
   */
  onConfirm: () => void;

  /**
   * Modal title text
   */
  title: string;

  /**
   * Modal message/description text
   */
  message: string;

  /**
   * Text for confirm button
   * @default "Yes, delete it"
   */
  confirmText?: string;

  /**
   * Text for cancel button
   * @default "Cancel"
   */
  cancelText?: string;
}

/**
 * ConfirmationModal Component
 *
 * @component
 * @description
 * A modal dialog for confirming user actions (deletions, submissions, etc.).
 * Features include:
 * - Overlay that closes modal on click
 * - Customizable title, message, and button text
 * - Default styling for destructive actions (red confirm button)
 * - Click-outside-to-close functionality
 * - Full Tailwind CSS support
 *
 * Perfect for confirming destructive operations like deletions or
 * any action that requires explicit user confirmation.
 *
 * @param {ConfirmationModalProps} props - Component props
 * @returns {JSX.Element | null} Rendered confirmation modal or null if closed
 *
 * @example
 * ```tsx
 * import { ConfirmationModal } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function MyComponent() {
 *   const [showModal, setShowModal] = useState(false);
 *
 *   const handleDelete = () => {
 *     // Perform delete action
 *     console.log('Item deleted');
 *     setShowModal(false);
 *   };
 *
 *   return (
 *     <>
 *       <button onClick={() => setShowModal(true)}>
 *         Delete Item
 *       </button>
 *
 *       <ConfirmationModal
 *         isOpen={showModal}
 *         onClose={() => setShowModal(false)}
 *         onConfirm={handleDelete}
 *         title="Delete Item?"
 *         message="Are you sure you want to delete this item? This action cannot be undone."
 *         confirmText="Yes, delete it"
 *         cancelText="Cancel"
 *       />
 *     </>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom confirmation (non-destructive)
 * <ConfirmationModal
 *   isOpen={showSaveModal}
 *   onClose={() => setShowSaveModal(false)}
 *   onConfirm={handleSave}
 *   title="Save Changes?"
 *   message="Do you want to save your changes before leaving?"
 *   confirmText="Save"
 *   cancelText="Don't Save"
 * />
 * ```
 */
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Yes, delete it",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <Button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
