import React from "react";

/**
 * Paragraph Component Props
 *
 * @interface ParagraphProps
 *
 * @description
 * Props for the Paragraph component
 *
 * @example
 * ```tsx
 * <Paragraph className="text-gray-600 leading-relaxed">
 *   This is a paragraph of text
 * </Paragraph>
 * ```
 */
export interface ParagraphProps {
  /**
   * Content of the paragraph (text, JSX, or React nodes)
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * @example "text-gray-700 text-lg leading-relaxed mb-4"
   */
  className?: string;
}

/**
 * Paragraph Component
 *
 * @component
 * @description
 * A reusable paragraph component for displaying text with full Tailwind CSS support.
 * Simple, semantic, and flexible for any text content.
 *
 * @param {ParagraphProps} props - Component props
 * @returns {JSX.Element} Rendered paragraph element
 *
 * @example
 * ```tsx
 * import { Paragraph } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <>
 *       <Paragraph className="text-gray-800 text-base mb-4">
 *         This is a standard paragraph with custom styling.
 *       </Paragraph>
 *
 *       <Paragraph className="text-sm text-gray-500 italic">
 *         A smaller, italicized paragraph
 *       </Paragraph>
 *     </>
 *   );
 * }
 * ```
 */
const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
