import { Info } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

/**
 * InfoTooltip Component Props
 *
 * @interface InfoTooltipProps
 *
 * @description
 * Props for the InfoTooltip component that displays an info icon with tooltip
 *
 * @example
 * ```tsx
 * <InfoTooltip content="This field is required for authentication" />
 * ```
 */
export interface InfoTooltipProps {
  /**
   * Content to display in the tooltip (text or React nodes)
   */
  content: string | React.ReactNode;

  /**
   * Additional CSS classes for the tooltip container (Tailwind CSS supported)
   */
  className?: string;
}

/**
 * InfoTooltip Component
 *
 * @component
 * @description
 * Displays an info icon that shows a tooltip on hover and click.
 * Perfect for providing additional context or help text next to form fields or labels.
 * The tooltip can display HTML content when passed as a string.
 *
 * @param {InfoTooltipProps} props - Component props
 * @returns {JSX.Element} Rendered info icon with tooltip
 *
 * @example
 * ```tsx
 * import { InfoTooltip } from 'drk-ui-components';
 *
 * function MyForm() {
 *   return (
 *     <div className="flex items-center gap-2">
 *       <label>Password</label>
 *       <InfoTooltip content="Password must be at least 8 characters long" />
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // With HTML content
 * <InfoTooltip
 *   content="<strong>Important:</strong> This action cannot be undone"
 *   className="ml-2"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With React node content
 * <InfoTooltip
 *   content={
 *     <div>
 *       <strong>Features:</strong>
 *       <ul>
 *         <li>Fast</li>
 *         <li>Secure</li>
 *       </ul>
 *     </div>
 *   }
 * />
 * ```
 */
const InfoTooltip: React.FC<InfoTooltipProps> = ({
  content,
  className = "",
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle click on icon
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipVisible((prev) => !prev);
  };

  // Delay hiding on mouse leave to allow moving cursor to tooltip
  const handleMouseLeave = () => {
    setTimeout(() => {
      const tooltipHover = tooltipRef.current?.matches(":hover");
      const iconHover = iconRef.current?.matches(":hover");
      if (!tooltipHover && !iconHover) {
        setIsTooltipVisible(false);
      }
    }, 100);
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <div
        ref={iconRef}
        className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        aria-label="Information"
      >
        <Info size={18} />
      </div>

      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className="absolute bottom-full mb-2 z-10 p-2 bg-gray-900 border border-gray-200 rounded shadow-lg text-sm text-white min-w-[200px] max-w-[300px]"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={handleMouseLeave}
        >
          {typeof content === "string" ? (
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
