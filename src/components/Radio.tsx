import React from "react";

/**
 * Radio Component Props
 *
 * @interface RadioProps
 *
 * @description
 * Props for the Radio component
 */
export interface RadioProps {
  /**
   * Value of the radio button
   */
  value: string;

  /**
   * Currently selected value
   */
  checked?: boolean;

  /**
   * Label text for the radio button
   */
  label?: string;

  /**
   * Whether the radio is disabled
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
  onChange?: (value: string) => void;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;

  /**
   * ID for the radio input
   */
  id?: string;

  /**
   * Name attribute for the radio group
   */
  name?: string;
}

/**
 * Radio Component
 *
 * @component
 * @description
 * A customizable radio button component with label and helper text support.
 * Designed for mutually exclusive options in forms.
 *
 * Features:
 * - Optional label and helper text
 * - Disabled state
 * - Keyboard accessible
 * - Full Tailwind CSS customization
 * - Clean design
 *
 * @param {RadioProps} props - Component props
 * @returns {JSX.Element} Rendered radio component
 *
 * @example
 * ```tsx
 * import { Radio } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function PaymentMethod() {
 *   const [method, setMethod] = useState('card');
 *
 *   return (
 *     <div className="space-y-3">
 *       <Radio
 *         name="payment"
 *         value="card"
 *         checked={method === 'card'}
 *         onChange={setMethod}
 *         label="Credit Card"
 *         helperText="Pay with Visa, MasterCard, or AmEx"
 *       />
 *       <Radio
 *         name="payment"
 *         value="paypal"
 *         checked={method === 'paypal'}
 *         onChange={setMethod}
 *         label="PayPal"
 *       />
 *       <Radio
 *         name="payment"
 *         value="bank"
 *         checked={method === 'bank'}
 *         onChange={setMethod}
 *         label="Bank Transfer"
 *         disabled
 *       />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom styled radio
 * <Radio
 *   value="option1"
 *   label="Option 1"
 *   className="accent-blue-500"
 * />
 * ```
 */
const Radio: React.FC<RadioProps> = ({
  value,
  checked = false,
  label,
  disabled = false,
  helperText,
  onChange,
  className = "",
  id,
  name,
}) => {
  const radioId = id || `radio-${value}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={radioId}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={() => onChange?.(value)}
          disabled={disabled}
          className={`${
            className ||
            "w-4 h-4 border-gray-300 text-primary-500 focus:ring-primary-500 focus:ring-2 focus:ring-offset-0"
          } ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      </div>
      {(label || helperText) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={radioId}
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

export default Radio;
