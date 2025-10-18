import React from "react";

/**
 * Span Component Props
 *
 * @interface SpanProps
 *
 * @description
 * Props for the Span component
 *
 * @example
 * ```tsx
 * <Span className="text-blue-500 font-semibold">Important text</Span>
 * ```
 */
export interface SpanProps {
  /**
   * Content of the span (text, JSX, or React nodes)
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * @example "text-primary-500 font-bold underline"
   */
  className?: string;
}

/**
 * Span Component
 *
 * @component
 * @description
 * A reusable inline span component for styling portions of text.
 * Fully supports Tailwind CSS for flexible text styling within paragraphs or other elements.
 *
 * @param {SpanProps} props - Component props
 * @returns {JSX.Element} Rendered span element
 *
 * @example
 * ```tsx
 * import { Span, Paragraph } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <Paragraph>
 *       This is a paragraph with{' '}
 *       <Span className="text-primary-500 font-bold">highlighted text</Span>
 *       {' '}in the middle.
 *     </Paragraph>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Badge-like span
 * <Span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
 *   Active
 * </Span>
 * ```
 */
const Span: React.FC<SpanProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

export default Span;
