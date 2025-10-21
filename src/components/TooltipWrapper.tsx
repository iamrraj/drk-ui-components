import React, { useState } from "react";

/**
 * Tooltip Position Options
 *
 * @type TooltipPosition
 * @description Available positions for tooltip placement
 */
export type TooltipPosition = "top" | "bottom" | "left" | "right";

/**
 * Tooltip Props (Internal)
 *
 * @interface TooltipProps
 */
interface TooltipProps {
  /**
   * Tooltip content text
   */
  content: string;

  /**
   * Visibility state
   */
  isVisible: boolean;

  /**
   * Tooltip position relative to trigger
   * @default "top"
   */
  position?: TooltipPosition;

  /**
   * Additional CSS classes for the tooltip
   */
  className?: string;
}

/**
 * Tooltip Component (Internal)
 *
 * @component
 * @description
 * Internal tooltip component that renders the actual tooltip with arrow.
 * Position is controlled by the parent TooltipWrapper component.
 */
const Tooltip: React.FC<TooltipProps> = ({
  content,
  isVisible,
  position = "top",
  className = "",
}) => {
  if (!isVisible) return null;

  let positionClass = "";
  let arrowClass = "";

  switch (position) {
    case "bottom":
      positionClass = "top-full mt-2 left-1/2 transform -translate-x-1/2";
      arrowClass =
        "absolute bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-b-gray-800 border-l-transparent border-r-transparent";
      break;
    case "left":
      positionClass = "right-full mr-2 top-1/2 transform -translate-y-1/2";
      arrowClass =
        "absolute left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-l-gray-800 border-t-transparent border-b-transparent";
      break;
    case "right":
      positionClass = "left-full ml-2 top-1/2 transform -translate-y-1/2";
      arrowClass =
        "absolute right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-r-gray-800 border-t-transparent border-b-transparent";
      break;
    case "top":
    default:
      positionClass = "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
      arrowClass =
        "absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-t-gray-800 border-l-transparent border-r-transparent";
      break;
  }

  return (
    <div
      className={`absolute ${positionClass} bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-[100] ${className}`}
    >
      <div className={arrowClass} />
      <div>{content}</div>
    </div>
  );
};

/**
 * TooltipWrapper Component Props
 *
 * @interface TooltipWrapperProps
 *
 * @description
 * Props for the TooltipWrapper component that wraps any element with a tooltip
 *
 * @example
 * ```tsx
 * <TooltipWrapper tooltipContent="Click to edit">
 *   <button>Edit</button>
 * </TooltipWrapper>
 * ```
 */
export interface TooltipWrapperProps {
  /**
   * Element(s) to wrap with tooltip functionality
   */
  children: React.ReactNode;

  /**
   * Text to display in the tooltip
   */
  tooltipContent: string;

  /**
   * Position of the tooltip relative to the children
   * @default "top"
   */
  placement?: TooltipPosition;

  /**
   * Additional CSS classes for the wrapper container
   */
  className?: string;

  /**
   * Additional CSS classes for the tooltip itself
   */
  tooltipClassName?: string;
}

/**
 * TooltipWrapper Component
 *
 * @component
 * @description
 * Wraps any element with tooltip functionality. Shows tooltip on hover.
 * Supports four different positions: top, bottom, left, and right.
 *
 * @param {TooltipWrapperProps} props - Component props
 * @returns {JSX.Element} Wrapped element with tooltip
 *
 * @example
 * ```tsx
 * import { TooltipWrapper, Button } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <>
 *       <TooltipWrapper tooltipContent="Save your changes">
 *         <Button className="bg-blue-500 text-white px-4 py-2 rounded">
 *           Save
 *         </Button>
 *       </TooltipWrapper>
 *
 *       <TooltipWrapper
 *         tooltipContent="Delete permanently"
 *         placement="bottom"
 *       >
 *         <Button className="bg-red-500 text-white px-4 py-2 rounded">
 *           Delete
 *         </Button>
 *       </TooltipWrapper>
 *     </>
 *   );
 * }
 * ```
 */
const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  children,
  tooltipContent,
  placement = "top",
  className = "",
  tooltipClassName = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      data-testid="tooltip-trigger"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <Tooltip
        content={tooltipContent}
        isVisible={showTooltip}
        position={placement}
        className={tooltipClassName}
      />
    </div>
  );
};

export default TooltipWrapper;
