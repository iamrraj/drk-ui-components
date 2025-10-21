import React from "react";

/**
 * Checkbox Component Props
 *
 * @interface CheckboxProps
 *
 * @description
 * Props for the Checkbox component
 */
export interface CheckboxProps {
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;

  /**
   * Label text for the checkbox
   */
  label?: string;

  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Helper text displayed below the label
   */
  helperText?: string;

  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;

  /**
   * ID for the checkbox input
   */
  id?: string;

  /**
   * Name attribute for the checkbox
   */
  name?: string;
}

/**
 * Checkbox Component
 *
 * @component
 * @description
 * A customizable checkbox input component with label and helper text support.
 * Built with accessibility and usability in mind.
 *
 * Features:
 * - Optional label and helper text
 * - Disabled state
 * - Keyboard accessible
 * - Full Tailwind CSS customization
 * - Clean design
 *
 * @param {CheckboxProps} props - Component props
 * @returns {JSX.Element} Rendered checkbox component
 *
 * @example
 * ```tsx
 * import { Checkbox } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function Settings() {
 *   const [notifications, setNotifications] = useState(false);
 *
 *   return (
 *     <Checkbox
 *       checked={notifications}
 *       onChange={setNotifications}
 *       label="Enable notifications"
 *       helperText="Receive email notifications for updates"
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom styled checkbox
 * <Checkbox
 *   label="I agree to terms"
 *   className="accent-blue-500"
 * />
 * ```
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label,
  disabled = false,
  helperText,
  onChange,
  className = "",
  id,
  name,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className={`${
            className ||
            "w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500 focus:ring-2 focus:ring-offset-0"
          } ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      </div>
      {(label || helperText) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={checkboxId}
              className={`text-sm font-medium text-gray-700 ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {label}
            </label>
          )}
          {helperText && (
            <p className="text-xs text-gray-500 mt-0.5">{helperText}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
