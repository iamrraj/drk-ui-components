import React from "react";

/**
 * Divider Orientation Options
 *
 * @type DividerOrientation
 * @description Available orientations for the divider
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Divider Component Props
 *
 * @interface DividerProps
 *
 * @description
 * Props for the Divider component
 */
export interface DividerProps {
  /**
   * Orientation of the divider
   * @default "horizontal"
   */
  orientation?: DividerOrientation;

  /**
   * Optional text to display in the middle of the divider
   */
  text?: string;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;
}

/**
 * Divider Component
 *
 * @component
 * @description
 * A simple divider component to separate content sections.
 * Supports both horizontal and vertical orientations with optional text label.
 *
 * Features:
 * - Horizontal and vertical orientations
 * - Optional text label
 * - Full Tailwind CSS customization
 * - Lightweight and flexible
 *
 * @param {DividerProps} props - Component props
 * @returns {JSX.Element} Rendered divider component
 *
 * @example
 * ```tsx
 * import { Divider } from 'drk-ui-components';
 *
 * function Content() {
 *   return (
 *     <div>
 *       <section>Top Content</section>
 *       <Divider />
 *       <section>Bottom Content</section>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Divider with text
 * <Divider text="OR" />
 *
 * // Vertical divider
 * <div className="flex items-center gap-4">
 *   <button>Left</button>
 *   <Divider orientation="vertical" className="h-8" />
 *   <button>Right</button>
 * </div>
 *
 * // Custom styled divider
 * <Divider className="border-blue-500 border-t-2" />
 * ```
 */
const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  text,
  className = "",
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={`${className || "border-l border-gray-300"} ${
          !className ? "h-full" : ""
        }`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (text) {
    return (
      <div className="flex items-center my-4" role="separator" aria-label={text}>
        <div
          className={`flex-1 ${className || "border-t border-gray-300"}`}
        />
        <span className="px-4 text-sm text-gray-500">{text}</span>
        <div
          className={`flex-1 ${className || "border-t border-gray-300"}`}
        />
      </div>
    );
  }

  return (
    <hr
      className={`${className || "border-t border-gray-300"} my-4`}
      role="separator"
    />
  );
};

export default Divider;
