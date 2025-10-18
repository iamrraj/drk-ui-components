import React from "react";

/**
 * Badge Color Variants
 *
 * @type BadgeVariant
 * @description Available color variants for the Badge component
 */
export type BadgeVariant =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "primary";

/**
 * Badge Component Props
 *
 * @interface BadgeProps
 *
 * @description
 * Props for the Badge component with multiple color variants
 *
 * @example
 * ```tsx
 * <Badge variant="green">Active</Badge>
 * ```
 */
export interface BadgeProps {
  /**
   * Badge content (text, JSX, or React nodes)
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * @example "ml-2 text-xs"
   */
  className?: string;

  /**
   * Color variant of the badge
   * @default "gray"
   */
  variant?: BadgeVariant;
}

/**
 * Get Tailwind CSS classes for badge variant
 *
 * @param {BadgeVariant} variant - Badge color variant
 * @returns {string} Tailwind CSS classes
 */
const getVariantStyles = (variant: BadgeVariant): string => {
  const variantStyles: Record<BadgeVariant, string> = {
    gray: "text-gray-800 bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300",
    red: "text-white bg-gradient-to-r from-red-500 to-red-600 border-red-500",
    green: "text-white bg-gradient-to-r from-green-500 to-green-600 border-green-500",
    blue: "text-white bg-gradient-to-r from-blue-500 to-blue-600 border-blue-500",
    yellow: "text-yellow-900 bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-400",
    purple: "text-white bg-gradient-to-r from-purple-500 to-purple-600 border-purple-500",
    primary: "text-white bg-primary-500 border-primary-500",
  };

  return variantStyles[variant];
};

/**
 * Badge Component
 *
 * @component
 * @description
 * A reusable badge component for displaying status indicators, labels, or tags.
 * Comes with 7 pre-styled color variants and supports full Tailwind CSS customization.
 *
 * @param {BadgeProps} props - Component props
 * @returns {JSX.Element} Rendered badge element
 *
 * @example
 * ```tsx
 * import { Badge } from 'drk-ui-components';
 *
 * function StatusIndicator() {
 *   return (
 *     <div className="flex gap-2">
 *       <Badge variant="green">Active</Badge>
 *       <Badge variant="red">Error</Badge>
 *       <Badge variant="yellow">Warning</Badge>
 *       <Badge variant="blue">Info</Badge>
 *       <Badge variant="gray">Inactive</Badge>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom styled badge
 * <Badge variant="primary" className="text-lg px-4 py-2">
 *   Premium
 * </Badge>
 * ```
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "gray",
  ...props
}) => {
  const variantStyles = getVariantStyles(variant);

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold shadow-sm border ${variantStyles} ${className}`}
      data-testid="badge"
      data-variant={variant}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
