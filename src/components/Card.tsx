import React, { ReactNode, HTMLAttributes } from "react";

/**
 * Card Component Props
 *
 * @interface CardProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 *
 * @description
 * Props for the Card component. Extends all standard HTML div attributes
 * and provides additional customization options.
 *
 * @example
 * ```tsx
 * <Card className="bg-white shadow-lg p-6 rounded-xl">
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the Card
   */
  children?: ReactNode;

  /**
   * Additional CSS classes to apply (Tailwind CSS supported)
   * @example "bg-white shadow-lg p-6 rounded-xl border border-gray-200"
   */
  className?: string;

  /**
   * Unique identifier for the Card element
   */
  id?: string;

  /**
   * Optional click event handler for the Card
   * @param e - React mouse event
   */
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Card Component
 *
 * @component
 * @description
 * A versatile Card component for structuring content with full Tailwind CSS support.
 * Acts as a flexible container that can be styled with any Tailwind classes.
 * Perfect for creating panels, sections, or grouped content.
 *
 * @param {CardProps} props - Component props
 * @returns {JSX.Element} Rendered card element
 *
 * @example
 * ```tsx
 * import { Card } from 'drk-ui-components';
 *
 * function MyComponent() {
 *   return (
 *     <Card className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
 *       <h2 className="text-xl font-bold mb-4">Product Card</h2>
 *       <p className="text-gray-600">This is a product description</p>
 *     </Card>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Clickable card
 * <Card
 *   className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg border"
 *   onClick={() => console.log('Card clicked')}
 * >
 *   Click me!
 * </Card>
 * ```
 */
const Card: React.FC<CardProps> = ({
  children,
  className = "",
  id,
  onClick,
  ...rest
}) => {
  return (
    <div
      id={id}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
