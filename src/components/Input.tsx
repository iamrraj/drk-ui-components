import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils";

export type InputVariant = "default" | "filled" | "unstyled";
export type InputSize = "sm" | "md" | "lg";

const wrapperBaseClasses = "flex items-center gap-2 transition";

const focusRingClasses =
  "rounded-lg border focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-0";

const variantClasses: Record<InputVariant, string> = {
  default:
    "border-gray-300 bg-white focus-within:border-primary-400 focus-within:bg-white",
  filled:
    "border-transparent bg-gray-100 focus-within:border-primary-300 focus-within:bg-white",
  unstyled: "border-none bg-transparent px-0 focus-within:ring-0",
};

const sizeWrapperClasses: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

const unstyledSizeWrapperClasses: Record<InputSize, string> = {
  sm: "h-9 text-sm",
  md: "h-10 text-sm",
  lg: "h-12 text-base",
};

const sizeInputClasses: Record<InputSize, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

/**
 * Input Component Props
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  variant?: InputVariant;
  inputSize?: InputSize;
  className?: string;
  inputClassName?: string;
  /**
   * @deprecated Extra props for the input element. Use standard props instead.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      leftIcon,
      rightIcon,
      addonBefore,
      addonAfter,
      variant = "default",
      inputSize = "md",
      id,
      name,
      className,
      inputClassName,
      inputProps,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? name ?? generatedId;

    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error && errorMessage ? `${inputId}-error` : undefined;
    const describedBy =
      [helperId, errorId].filter(Boolean).join(" ") || undefined;

    const wrapperSizeClass =
      variant === "unstyled"
        ? unstyledSizeWrapperClasses[inputSize]
        : sizeWrapperClasses[inputSize];

    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div
          className={cn(
            wrapperBaseClasses,
            wrapperSizeClass,
            variant === "unstyled" ? variantClasses[variant] : focusRingClasses,
            variant !== "unstyled" && variantClasses[variant],
            disabled && "cursor-not-allowed opacity-60",
            error &&
              variant !== "unstyled" &&
              "border-red-500 focus-within:ring-red-500"
          )}
        >
          {leftIcon && (
            <span className="flex items-center text-gray-500">{leftIcon}</span>
          )}

          {addonBefore && (
            <span className="min-w-max text-sm text-gray-500">
              {addonBefore}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            aria-invalid={error || undefined}
            aria-describedby={describedBy}
            required={required}
            disabled={disabled}
            className={cn(
              "flex-1 bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none",
              sizeInputClasses[inputSize],
              variant === "unstyled" && "px-0",
              inputClassName
            )}
            {...inputProps}
            {...props}
          />

          {addonAfter && (
            <span className="min-w-max text-sm text-gray-500">
              {addonAfter}
            </span>
          )}

          {rightIcon && (
            <span className="flex items-center text-gray-500">{rightIcon}</span>
          )}
        </div>

        {helperText && (
          <p id={helperId} className="text-xs text-gray-500">
            {helperText}
          </p>
        )}

        {error && errorMessage && (
          <p id={errorId} className="text-xs text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
