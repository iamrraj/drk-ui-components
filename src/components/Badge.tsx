import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils";

export type BadgeVariant =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "primary";

export type BadgeAppearance = "solid" | "soft" | "outline";
export type BadgeSize = "sm" | "md" | "lg";
export type BadgeRadius = "md" | "lg" | "pill";

const sizeClasses: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
  lg: "text-sm px-3 py-1.5",
};

const radiusClasses: Record<BadgeRadius, string> = {
  md: "rounded-md",
  lg: "rounded-lg",
  pill: "rounded-full",
};

const appearanceClasses: Record<BadgeAppearance, Record<BadgeVariant, string>> = {
  solid: {
    gray: "bg-gray-900 text-white border-transparent",
    red: "bg-red-600 text-white border-transparent",
    green: "bg-green-600 text-white border-transparent",
    blue: "bg-blue-600 text-white border-transparent",
    yellow: "bg-yellow-500 text-yellow-900 border-transparent",
    purple: "bg-purple-600 text-white border-transparent",
    primary: "bg-primary-600 text-white border-transparent",
  },
  soft: {
    gray: "text-gray-800 bg-gray-100 border-transparent",
    red: "text-red-700 bg-red-100 border-transparent",
    green: "text-green-700 bg-green-100 border-transparent",
    blue: "text-blue-700 bg-blue-100 border-transparent",
    yellow: "text-yellow-800 bg-yellow-100 border-transparent",
    purple: "text-purple-700 bg-purple-100 border-transparent",
    primary: "text-primary-700 bg-primary-100 border-transparent",
  },
  outline: {
    gray: "text-gray-700 bg-transparent border-gray-300",
    red: "text-red-600 bg-transparent border-red-300",
    green: "text-green-600 bg-transparent border-green-300",
    blue: "text-blue-600 bg-transparent border-blue-300",
    yellow: "text-yellow-700 bg-transparent border-yellow-300",
    purple: "text-purple-600 bg-transparent border-purple-300",
    primary: "text-primary-600 bg-transparent border-primary-300",
  },
};

const dotColorClasses: Record<BadgeVariant, string> = {
  gray: "bg-gray-500",
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
  primary: "bg-primary-500",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  size?: BadgeSize;
  radius?: BadgeRadius;
  /**
   * Adds a small dot indicator before the badge content
   */
  withDot?: boolean;
  /**
   * Controls the dot color when `withDot` is true. Defaults to the variant color.
   */
  dotClassName?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "gray",
  appearance = "soft",
  size = "md",
  radius = "lg",
  withDot = false,
  dotClassName,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium border",
        "transition-colors",
        appearanceClasses[appearance][variant],
        sizeClasses[size],
        radiusClasses[radius],
        className,
      )}
      data-variant={variant}
      data-appearance={appearance}
      data-size={size}
      {...props}
    >
      {withDot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotClassName,
            !dotClassName && dotColorClasses[variant],
          )}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
