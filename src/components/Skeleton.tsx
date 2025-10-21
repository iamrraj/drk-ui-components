import React from "react";

/**
 * Skeleton Component Props
 *
 * @interface SkeletonProps
 *
 * @description
 * Props for the Skeleton component - a loading placeholder
 */
export interface SkeletonProps {
  /**
   * Width of the skeleton (CSS value)
   * @default "100%"
   */
  width?: string;

  /**
   * Height of the skeleton (CSS value)
   * @default "1rem"
   */
  height?: string;

  /**
   * Whether the skeleton should be circular
   * @default false
   */
  circle?: boolean;

  /**
   * Number of lines to render
   * @default 1
   */
  count?: number;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;
}

/**
 * Skeleton Component
 *
 * @component
 * @description
 * A loading placeholder component that creates a "skeleton screen" effect.
 * Perfect for indicating content is loading while maintaining layout.
 *
 * Features:
 * - Customizable width and height
 * - Circle variant for avatars
 * - Multiple lines support
 * - Smooth pulse animation
 * - Full Tailwind CSS customization
 *
 * @param {SkeletonProps} props - Component props
 * @returns {JSX.Element} Rendered skeleton component
 *
 * @example
 * ```tsx
 * import { Skeleton } from 'drk-ui-components';
 *
 * function UserCardLoading() {
 *   return (
 *     <div className="p-4">
 *       <Skeleton circle width="4rem" height="4rem" />
 *       <Skeleton width="200px" className="mt-4" />
 *       <Skeleton count={3} className="mt-2" />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom styled skeleton
 * <Skeleton
 *   width="100%"
 *   height="200px"
 *   className="bg-gray-200 rounded-lg"
 * />
 * ```
 */
const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  circle = false,
  count = 1,
  className = "",
}) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${
        className || "bg-gray-200"
      } animate-pulse ${circle ? "rounded-full" : "rounded"} ${
        count > 1 && index > 0 ? "mt-2" : ""
      }`}
      style={{
        width: circle ? height : width,
        height,
      }}
      role="status"
      aria-label="Loading"
    />
  ));

  return <>{skeletons}</>;
};

export default Skeleton;
