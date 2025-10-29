import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils";

export type StackDirection =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse";

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type StackAlign =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";

export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

const directionClasses: Record<StackDirection, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
};

const gapClasses: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
  "2xl": "gap-8",
};

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClasses: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex direction
   * @default "column"
   */
  direction?: StackDirection;
  /**
   * Gap between child elements
   * @default "md"
   */
  gap?: StackGap;
  /**
   * Alignment along the cross axis
   * @default "stretch"
   */
  align?: StackAlign;
  /**
   * Alignment along the main axis
   * @default "start"
   */
  justify?: StackJustify;
  /**
   * Render children inline-flex instead of block-level flex
   * @default false
   */
  inline?: boolean;
  /**
   * Allow flex wrapping
   * @default false
   */
  wrap?: boolean;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      direction = "column",
      gap = "md",
      align = "stretch",
      justify = "start",
      inline = false,
      wrap = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          inline ? "inline-flex" : "flex",
          directionClasses[direction],
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          wrap && "flex-wrap",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Stack.displayName = "Stack";

export default Stack;
