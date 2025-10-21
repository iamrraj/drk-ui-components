import React, { useState } from "react";

/**
 * Avatar Size Options
 *
 * @type AvatarSize
 * @description Available sizes for the avatar
 */
export type AvatarSize = "sm" | "md" | "lg" | "xl";

/**
 * Avatar Component Props
 *
 * @interface AvatarProps
 *
 * @description
 * Props for the Avatar component
 */
export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string;

  /**
   * Alt text for the image
   * @default "Avatar"
   */
  alt?: string;

  /**
   * Initials to show when no image is provided
   */
  initials?: string;

  /**
   * Size of the avatar
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   * User classes override defaults
   */
  className?: string;
}

/**
 * Avatar Component
 *
 * @component
 * @description
 * A user avatar component that displays profile images with fallback to initials.
 * Automatically handles image loading errors and shows initials fallback.
 *
 * Features:
 * - Image display with fallback to initials
 * - 4 size options (sm, md, lg, xl)
 * - Automatic error handling
 * - Full Tailwind CSS customization
 * - Circular design
 *
 * @param {AvatarProps} props - Component props
 * @returns {JSX.Element} Rendered avatar component
 *
 * @example
 * ```tsx
 * import { Avatar } from 'drk-ui-components';
 *
 * function UserProfile() {
 *   return (
 *     <div className="flex items-center gap-3">
 *       <Avatar
 *         src="https://example.com/avatar.jpg"
 *         alt="John Doe"
 *         size="lg"
 *       />
 *       <div>
 *         <h3>John Doe</h3>
 *         <p>Software Engineer</p>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Avatar with initials fallback
 * <Avatar initials="JD" size="md" className="bg-blue-500" />
 *
 * // Custom colored avatar
 * <Avatar initials="AB" className="bg-gradient-to-r from-purple-500 to-pink-500" />
 * ```
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  initials,
  size = "md",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-24 h-24 text-xl",
  };

  const showImage = src && !imageError;
  const showInitials = !showImage && initials;

  return (
    <div
      className={`${sizeClasses[size]} ${
        className || "bg-primary-500"
      } rounded-full flex items-center justify-center overflow-hidden text-white font-semibold`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      ) : showInitials ? (
        <span className="uppercase">{initials}</span>
      ) : (
        <svg
          className="w-2/3 h-2/3 text-white opacity-75"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
