import React from "react";

/**
 * Input Component Props
 *
 * @interface InputProps
 *
 * @description
 * Props for the Input component with full customization support
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 *   className="mb-4"
 * />
 * ```
 */
export interface InputProps {
  /**
   * Label text for the input field
   */
  label?: string;

  /**
   * Input type (text, password, email, number, date, etc.)
   * @default "text"
   */
  type?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Input value (for controlled components)
   */
  value?: string | number;

  /**
   * Change event handler
   * @param event - Input change event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Additional CSS classes for the container (Tailwind CSS supported)
   */
  className?: string;

  /**
   * Input name attribute
   */
  name?: string;

  /**
   * Maximum length of input
   */
  maxLength?: number;

  /**
   * Marks the input as required
   * @default false
   */
  required?: boolean;

  /**
   * Helper text displayed below the input
   */
  helpText?: string;

  /**
   * Minimum value (for date/number inputs)
   */
  min?: string;

  /**
   * Disables the input if true
   * @default false
   */
  disabled?: boolean;

  /**
   * Tab index for keyboard navigation
   */
  tabIndex?: number;

  /**
   * Additional attributes for the input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Input Component
 *
 * @component
 * @description
 * A reusable input component with label, validation, and helper text support.
 * Fully styled with Tailwind CSS and supports all standard input types.
 *
 * @param {InputProps} props - Component props
 * @returns {JSX.Element} Rendered input element
 *
 * @example
 * ```tsx
 * import { Input } from 'drk-ui-components';
 *
 * function MyForm() {
 *   const [email, setEmail] = useState('');
 *
 *   return (
 *     <Input
 *       label="Email Address"
 *       type="email"
 *       placeholder="you@example.com"
 *       value={email}
 *       onChange={(e) => setEmail(e.target.value)}
 *       required
 *       helpText="We'll never share your email"
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Date input with minimum date
 * <Input
 *   label="Select Date"
 *   type="date"
 *   min="2024-01-01"
 *   className="w-full"
 * />
 * ```
 */
const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  name,
  maxLength,
  required = false,
  helpText,
  min,
  disabled = false,
  tabIndex,
  inputProps,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        disabled={disabled}
        type={type}
        data-testid={`${name}-input`}
        placeholder={placeholder}
        value={value}
        name={name}
        min={min ?? undefined}
        maxLength={maxLength ? maxLength : undefined}
        onChange={onChange}
        tabIndex={tabIndex}
        className="border placeholder:text-gray-500 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        {...inputProps}
      />
      {helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
    </div>
  );
};

export default Input;
