import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils";

export type CardVariant = "elevated" | "outline" | "muted" | "ghost";
export type CardPadding = "none" | "sm" | "md" | "lg";

const variantClasses: Record<CardVariant, string> = {
  elevated:
    "bg-white shadow-md shadow-primary-500/5 border border-transparent",
  outline: "bg-white border border-gray-200",
  muted: "bg-gray-50 border border-transparent",
  ghost: "bg-transparent border border-transparent",
};

const cardPadding: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const segmentPadding: Record<CardPadding, string> = {
  none: "px-0 py-0",
  sm: "px-4 py-3",
  md: "px-6 py-4",
  lg: "px-8 py-5",
};

/**
 * Card Component Props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /**
   * Visual variant of the card container
   * @default "elevated"
   */
  variant?: CardVariant;
  /**
   * Padding applied to the card and its sections
   * @default "md"
   */
  padding?: CardPadding;
  /**
   * Adds hover and focus interactions (useful for clickable cards)
   * @default false
   */
  interactive?: boolean;
  /**
   * Optional header region rendered before the card body
   */
  header?: ReactNode;
  /**
   * Optional footer region rendered after the card body
   */
  footer?: ReactNode;
  /**
   * Apply borders between header/body/footer when provided
   * @default false
   */
  sectioned?: boolean;
  /**
   * Custom classes for individual regions
   */
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "elevated",
      padding = "md",
      interactive = false,
      header,
      footer,
      sectioned = false,
      headerClassName,
      bodyClassName,
      footerClassName,
      ...props
    },
    ref,
  ) => {
    const hasStructuredContent = Boolean(header || footer || sectioned);

    const rootPadding = hasStructuredContent ? "p-0" : cardPadding[padding];
    const segmentSpacing = segmentPadding[padding];

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl text-gray-900",
          variantClasses[variant],
          interactive &&
            "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          rootPadding,
          className,
        )}
        {...props}
      >
        {hasStructuredContent ? (
          <>
            {header && (
              <div
                className={cn(
                  segmentSpacing,
                  sectioned && "border-b border-gray-200",
                  headerClassName,
                )}
              >
                {header}
              </div>
            )}

            <div className={cn(segmentSpacing, bodyClassName)}>{children}</div>

            {footer && (
              <div
                className={cn(
                  segmentSpacing,
                  sectioned && "border-t border-gray-200",
                  footerClassName,
                )}
              >
                {footer}
              </div>
            )}
          </>
        ) : bodyClassName ? (
          <div className={bodyClassName}>{children}</div>
        ) : (
          children
        )}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
