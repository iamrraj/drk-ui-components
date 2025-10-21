import React from "react";

/**
 * Progress Size Options
 *
 * @type ProgressSize
 * @description Available sizes for the progress bar
 */
export type ProgressSize = "sm" | "md" | "lg";

/**
 * Progress Component Props
 *
 * @interface ProgressProps
 *
 * @description
 * Props for the Progress component
 */
export interface ProgressProps {
  /**
   * Progress value (0-100)
   */
  value: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Size of the progress bar
   * @default "md"
   */
  size?: ProgressSize;

  /**
   * Whether to show percentage label
   * @default false
   */
  showLabel?: boolean;

  /**
   * Additional CSS classes for container (Tailwind CSS supported)
   */
  className?: string;

  /**
   * Additional CSS classes for the progress bar itself
   * User classes override defaults
   */
  barClassName?: string;
}

/**
 * Progress Component
 *
 * @component
 * @description
 * A customizable progress bar component for showing completion status.
 * Perfect for file uploads, form completion, and loading states.
 *
 * Features:
 * - Configurable value and max
 * - 3 size options (sm, md, lg)
 * - Optional percentage label
 * - Full Tailwind CSS customization
 * - Smooth transitions
 *
 * @param {ProgressProps} props - Component props
 * @returns {JSX.Element} Rendered progress component
 *
 * @example
 * ```tsx
 * import { Progress } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function UploadProgress() {
 *   const [progress, setProgress] = useState(0);
 *
 *   return (
 *     <div className="w-full">
 *       <Progress value={progress} showLabel size="lg" />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom colored progress bar
 * <Progress
 *   value={75}
 *   barClassName="bg-gradient-to-r from-blue-500 to-purple-500"
 * />
 *
 * // Small progress bar
 * <Progress value={30} size="sm" />
 * ```
 */
const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = "md",
  showLabel = false,
  className = "",
  barClassName = "",
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`${sizeClasses[size]} w-full bg-gray-200 rounded-full overflow-hidden`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={`${
            barClassName || "bg-primary-500"
          } h-full transition-all duration-300 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-gray-600 mt-1 text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
