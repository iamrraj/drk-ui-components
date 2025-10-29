import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils";

const visuallyHiddenStyles =
  "absolute h-px w-px -m-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Render the content in the DOM but visually hide it from sighted users.
   */
  children: ReactNode;
}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(visuallyHiddenStyles, className)} {...props}>
        {children}
      </span>
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";

export default VisuallyHidden;
