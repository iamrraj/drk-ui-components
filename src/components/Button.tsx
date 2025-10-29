import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Spinner from "./Spinner";
import { cn } from "../utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:ring-primary-500",
  secondary:
    "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:ring-gray-300",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-200",
  ghost: "text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-200",
  link: "text-primary-600 underline-offset-4 hover:underline focus-visible:ring-transparent",
  destructive:
    "bg-red-600 text-white shadow-sm hover:bg-red-500 focus-visible:ring-red-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 rounded-md px-3 text-sm",
  md: "h-10 rounded-lg px-4 text-sm",
  lg: "h-12 rounded-lg px-6 text-base",
  icon: "h-10 w-10 rounded-lg p-0",
};

/**
 * Button Component Props
 *
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 *
 * @description
 * A versatile button component with size, variant, icon, and loading support.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @deprecated Use children instead
   */
  text?: string;

  /**
   * Visual variant of the button
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Loading indicator state
   * @default false
   */
  loading?: boolean;

  /**
   * Optional text to show alongside the spinner (when loading)
   */
  loadingText?: ReactNode;

  /**
   * Icon element rendered before the button content
   */
  startIcon?: ReactNode;

  /**
   * Icon element rendered after the button content
   */
  endIcon?: ReactNode;

  /**
   * Force the button to take full width
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * Button Component
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      text,
      className,
      type = "button",
      disabled = false,
      variant = "primary",
      size = "md",
      loading = false,
      loadingText,
      startIcon,
      endIcon,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    const content = children ?? text;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          sizeClasses[size],
          variantClasses[variant],
          {
            "w-full": fullWidth,
            "px-0": size === "icon",
          },
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center gap-2">
            <Spinner
              size={size === "lg" ? "md" : "sm"}
              color="border-current"
            />
            {loadingText && <span className="text-sm font-medium">{loadingText}</span>}
          </span>
        )}

        <span
          className={cn(
            "inline-flex items-center justify-center gap-2",
            {
              "opacity-0": loading,
              "gap-0": size === "icon",
            },
          )}
        >
          {startIcon && (
            <span className="flex h-5 w-5 items-center justify-center">
              {startIcon}
            </span>
          )}
          {content && (
            <span
              className={cn({
                "sr-only": size === "icon",
              })}
            >
              {content}
            </span>
          )}
          {endIcon && (
            <span className="flex h-5 w-5 items-center justify-center">
              {endIcon}
            </span>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
