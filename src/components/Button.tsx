import React, { ButtonHTMLAttributes, MouseEvent } from "react";

/**
 * Button Component Props
 *
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 *
 * @description
 * A versatile button component that supports custom styling, click handlers,
 * and all standard HTML button attributes. Fully compatible with Tailwind CSS.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click Me</Button>
 *
 * // Button with custom classes
 * <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
 *   Submit
 * </Button>
 *
 * // Disabled button
 * <Button disabled onClick={() => console.log('Clicked')}>
 *   Can't Click
 * </Button>
 * ```
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The text content to display inside the button
   * @deprecated Use children instead
   */
  text?: string;

  /**
   * Click event handler
   * @param event - Mouse event from button click
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Additional CSS classes to apply (Tailwind CSS supported)
   * @example "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
   */
  className?: string;

  /**
   * Button type attribute
   * @default "button"
   */
  type?: "button" | "submit" | "reset";

  /**
   * Disables the button if true
   * @default false
   */
  disabled?: boolean;

  /**
   * The content to display inside the button
   */
  children?: React.ReactNode;
}

/**
 * Button Component
 *
 * @component
 * @description
 * A reusable button component with full Tailwind CSS support and accessibility features.
 * Supports all standard HTML button attributes and can be customized with className prop.
 *
 * @param {ButtonProps} props - Component props
 * @returns {JSX.Element} Rendered button element
 *
 * @example
 * ```tsx
 * import { Button } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <Button
 *       className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600"
 *       onClick={() => alert('Clicked!')}
 *     >
 *       Click Me
 *     </Button>
 *   );
 * }
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
