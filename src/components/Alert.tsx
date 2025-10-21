import React from "react";
import { BiX, BiInfoCircle, BiCheckCircle, BiErrorCircle, BiError } from "react-icons/bi";

/**
 * Alert Variant Options
 *
 * @type AlertVariant
 * @description Available variants for the alert
 */
export type AlertVariant = "info" | "success" | "warning" | "error";

/**
 * Alert Component Props
 *
 * @interface AlertProps
 *
 * @description
 * Props for the Alert component
 */
export interface AlertProps {
  /**
   * Alert variant/type
   * @default "info"
   */
  variant?: AlertVariant;

  /**
   * Title of the alert
   */
  title?: string;

  /**
   * Message content of the alert
   */
  children: React.ReactNode;

  /**
   * Whether the alert can be dismissed
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;
}

/**
 * Alert Component
 *
 * @component
 * @description
 * A versatile alert/banner component for displaying important messages.
 * Supports different variants and optional dismiss functionality.
 *
 * Features:
 * - 4 variants (info, success, warning, error)
 * - Optional title
 * - Dismissible option
 * - Icons for each variant
 * - Full Tailwind CSS customization
 *
 * @param {AlertProps} props - Component props
 * @returns {JSX.Element} Rendered alert component
 *
 * @example
 * ```tsx
 * import { Alert } from 'drk-ui-components';
 *
 * function Notifications() {
 *   return (
 *     <div className="space-y-4">
 *       <Alert variant="success" title="Success!">
 *         Your profile has been updated successfully.
 *       </Alert>
 *
 *       <Alert variant="error" dismissible onDismiss={() => console.log('dismissed')}>
 *         An error occurred while processing your request.
 *       </Alert>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom styled alert
 * <Alert
 *   variant="info"
 *   className="bg-blue-50 border-blue-300"
 * >
 *   Custom information message
 * </Alert>
 * ```
 */
const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className = "",
}) => {
  const variantStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const icons = {
    info: <BiInfoCircle className="text-blue-500" size={20} />,
    success: <BiCheckCircle className="text-green-500" size={20} />,
    warning: <BiError className="text-yellow-500" size={20} />,
    error: <BiErrorCircle className="text-red-500" size={20} />,
  };

  return (
    <div
      className={`${
        className || variantStyles[variant]
      } border rounded-lg p-4 flex items-start gap-3`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{icons[variant]}</div>

      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>

      {dismissible && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 text-current opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Dismiss alert"
        >
          <BiX size={20} />
        </button>
      )}
    </div>
  );
};

export default Alert;
