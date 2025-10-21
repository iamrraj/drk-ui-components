import React from "react";

/**
 * Spinner Size Options
 *
 * @type SpinnerSize
 * @description Available sizes for the spinner
 */
export type SpinnerSize = "sm" | "md" | "lg" | "xl";

/**
 * Spinner Component Props
 *
 * @interface SpinnerProps
 *
 * @description
 * Props for the Spinner component - a loading indicator
 */
export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default "md"
   */
  size?: SpinnerSize;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   */
  className?: string;

  /**
   * Color of the spinner
   * @default "border-primary-500"
   */
  color?: string;
}

/**
 * Spinner Component
 *
 * @component
 * @description
 * A customizable loading spinner component with multiple sizes and colors.
 * Perfect for indicating loading states in your application.
 *
 * Features:
 * - 4 size options (sm, md, lg, xl)
 * - Customizable colors
 * - Smooth animation
 * - Full Tailwind CSS customization
 *
 * @param {SpinnerProps} props - Component props
 * @returns {JSX.Element} Rendered spinner component
 *
 * @example
 * ```tsx
 * import { Spinner } from 'drk-ui-components';
 *
 * function LoadingState() {
 *   return (
 *     <div className="flex justify-center items-center min-h-screen">
 *       <Spinner size="lg" />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom colored spinner
 * <Spinner size="md" color="border-blue-500" />
 *
 * // Small spinner for inline loading
 * <button className="flex items-center gap-2">
 *   <Spinner size="sm" /> Loading...
 * </button>
 * ```
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
  color = "border-primary-500",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${color} border-t-transparent rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;
