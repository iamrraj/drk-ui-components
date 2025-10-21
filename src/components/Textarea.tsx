import React from "react";

/**
 * Textarea Component Props
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label text
   */
  label?: string;

  /**
   * Helper text displayed below textarea
   */
  helperText?: string;

  /**
   * Error message
   */
  error?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Textarea Component
 *
 * @component
 * @description
 * A multi-line text input component with label and helper text support.
 *
 * @example
 * ```tsx
 * import { Textarea } from 'drk-ui-components';
 *
 * <Textarea
 *   label="Description"
 *   placeholder="Enter description..."
 *   rows={4}
 *   helperText="Maximum 500 characters"
 * />
 * ```
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className={`${
          className ||
          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
        } ${error ? "border-red-500 focus:ring-red-500" : ""} ${
          props.disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""
        }`}
        {...props}
      />

      {(helperText || error) && (
        <p
          className={`text-xs mt-1 ${
            error ? "text-red-600" : "text-gray-500"
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Textarea;
