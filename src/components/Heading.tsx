import React from "react";

/**
 * Heading Component Props
 *
 * @interface HeadingProps
 *
 * @description
 * Props for the Heading component with dynamic heading levels
 *
 * @example
 * ```tsx
 * <Heading as="h1" className="text-3xl font-bold">
 *   Page Title
 * </Heading>
 * ```
 */
export interface HeadingProps {
  /**
   * Content inside the heading
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * @example "text-3xl font-bold text-gray-900 mb-4"
   */
  className?: string;

  /**
   * The heading level to render
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Heading Component
 *
 * @component
 * @description
 * A flexible heading component that can render different heading levels (h1-h6).
 * Provides semantic HTML structure while allowing full Tailwind CSS customization.
 *
 * @param {HeadingProps} props - Component props
 * @returns {JSX.Element} Rendered heading element
 *
 * @example
 * ```tsx
 * import { Heading } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <>
 *       <Heading as="h1" className="text-4xl font-bold text-gray-900 mb-6">
 *         Main Title
 *       </Heading>
 *
 *       <Heading as="h2" className="text-2xl font-semibold text-gray-800 mb-4">
 *         Subtitle
 *       </Heading>
 *
 *       <Heading as="h3" className="text-xl font-medium text-gray-700">
 *         Section Title
 *       </Heading>
 *     </>
 *   );
 * }
 * ```
 */
const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  as = "h2",
}) => {
  const Tag = as;

  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
