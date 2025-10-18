import React from "react";
import TooltipWrapper from "./TooltipWrapper";
import { Info } from "lucide-react";

/**
 * Label Component Props
 *
 * @interface LabelProps
 *
 * @description
 * Props for the Label component with optional helper text tooltip
 *
 * @example
 * ```tsx
 * <Label required helper_text="This field is required">
 *   Username
 * </Label>
 * ```
 */
export interface LabelProps {
  /**
   * Label content (text or React nodes)
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   */
  className?: string;

  /**
   * Shows a red asterisk if true
   * @default false
   */
  required?: boolean;

  /**
   * Helper text shown in a tooltip when hovering the info icon
   */
  helper_text?: string;

  /**
   * ID of the form element this label is for
   */
  htmlFor?: string;
}

/**
 * Label Component
 *
 * @component
 * @description
 * A reusable label component with optional required indicator and helper text tooltip.
 * Integrates seamlessly with form inputs and provides accessibility support.
 *
 * @param {LabelProps} props - Component props
 * @returns {JSX.Element} Rendered label element
 *
 * @example
 * ```tsx
 * import { Label } from 'drk-ui-components';
 *
 * function MyForm() {
 *   return (
 *     <div>
 *       <Label
 *         htmlFor="email"
 *         required
 *         helper_text="We use this to send you notifications"
 *       >
 *         Email Address
 *       </Label>
 *       <input id="email" type="email" />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Simple label
 * <Label htmlFor="username">Username</Label>
 * ```
 */
const Label: React.FC<LabelProps> = ({
  children,
  className = "",
  required = false,
  htmlFor,
  helper_text,
  ...props
}) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor || (typeof children === "string" ? children : undefined)}
      className={`${className} block text-sm font-medium text-gray-700 mb-1`}
    >
      <span className="flex items-center">
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
        {helper_text && (
          <TooltipWrapper tooltipContent={helper_text}>
            <Info
              data-testid="helper-icon"
              className="ml-1 text-gray-500 cursor-pointer hover:text-gray-700"
              size={16}
            />
          </TooltipWrapper>
        )}
      </span>
    </label>
  );
};

export default Label;
