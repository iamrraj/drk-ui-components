import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

/**
 * Toast Type
 *
 * @type ToastType
 * @description Available types for toast notifications
 */
export type ToastType = "success" | "error" | "warning" | "info";

/**
 * Toast Component Props
 *
 * @interface ToastProps
 *
 * @description
 * Props for the Toast notification component
 *
 * @example
 * ```tsx
 * <Toast
 *   title="Success!"
 *   message="Your changes have been saved"
 *   type="success"
 *   duration={3000}
 *   onClose={() => console.log('closed')}
 * />
 * ```
 */
export interface ToastProps {
  /**
   * Toast title
   */
  title: string;

  /**
   * Toast message content
   */
  message: string;

  /**
   * Type of toast notification
   * @default "info"
   */
  type?: ToastType;

  /**
   * Duration in milliseconds before auto-close
   * @default 3000
   */
  duration?: number;

  /**
   * Theme variant
   * @default "dark"
   */
  theme?: "light" | "dark";

  /**
   * Callback when toast is closed
   */
  onClose: () => void;
}

/**
 * Toast Component
 *
 * @component
 * @description
 * A notification toast component with progress bar, auto-dismiss, and animations.
 * Supports 4 types (success, error, warning, info) and 2 themes (light, dark).
 * Features:
 * - Auto-dismiss with configurable duration
 * - Progress bar showing time remaining
 * - Smooth fade-in/out animations
 * - Icon based on notification type
 * - Manual close button
 * - Accessibility support (ARIA attributes)
 *
 * @param {ToastProps} props - Component props
 * @returns {JSX.Element} Rendered toast notification
 *
 * @example
 * ```tsx
 * import { Toast } from '@iamrraj/drk-ui-components';
 *
 * function MyComponent() {
 *   const [show, setShow] = useState(true);
 *
 *   if (!show) return null;
 *
 *   return (
 *     <Toast
 *       title="Upload Complete"
 *       message="Your file has been uploaded successfully"
 *       type="success"
 *       duration={5000}
 *       theme="light"
 *       onClose={() => setShow(false)}
 *     />
 *   );
 * }
 * ```
 */
const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type = "info",
  duration = 3000,
  theme = "dark",
  onClose,
}) => {
  const [progress, setProgress] = useState<number>(100);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          return 0;
        }
        return prev - 100 / (duration / 10);
      });
    }, 10);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      const closeTimer = setTimeout(() => {
        onClose();
      }, 300);
      (hideTimer as any)._closeTimerId = closeTimer;
    }, duration);

    return () => {
      clearInterval(progressInterval);
      if ((hideTimer as any)._closeTimerId) {
        clearTimeout((hideTimer as any)._closeTimerId);
      }
      clearTimeout(hideTimer);
    };
  }, [duration, onClose]);

  const typesConfig = {
    success: {
      icon: CheckCircle,
      light: {
        bgColor: "bg-green-50",
        textColor: "text-green-800",
        progressColor: "bg-green-500",
        borderColor: "border-green-200",
        closeColor: "text-green-700",
      },
      dark: {
        bgColor: "bg-gray-800",
        textColor: "text-green-300",
        progressColor: "bg-green-500",
        borderColor: "border-green-700",
        closeColor: "text-green-200",
      },
    },
    error: {
      icon: XCircle,
      light: {
        bgColor: "bg-red-50",
        textColor: "text-red-800",
        progressColor: "bg-red-500",
        borderColor: "border-red-200",
        closeColor: "text-red-700",
      },
      dark: {
        bgColor: "bg-gray-800",
        textColor: "text-red-300",
        progressColor: "bg-red-500",
        borderColor: "border-red-700",
        closeColor: "text-red-200",
      },
    },
    warning: {
      icon: AlertCircle,
      light: {
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-800",
        progressColor: "bg-yellow-500",
        borderColor: "border-yellow-200",
        closeColor: "text-yellow-700",
      },
      dark: {
        bgColor: "bg-gray-800",
        textColor: "text-yellow-300",
        progressColor: "bg-yellow-500",
        borderColor: "border-yellow-700",
        closeColor: "text-yellow-200",
      },
    },
    info: {
      icon: Info,
      light: {
        bgColor: "bg-blue-50",
        textColor: "text-blue-800",
        progressColor: "bg-blue-500",
        borderColor: "border-blue-200",
        closeColor: "text-blue-700",
      },
      dark: {
        bgColor: "bg-gray-800",
        textColor: "text-blue-300",
        progressColor: "bg-blue-500",
        borderColor: "border-blue-700",
        closeColor: "text-blue-200",
      },
    },
  };

  const {
    icon: Icon,
    [theme]: { bgColor, textColor, progressColor, borderColor, closeColor },
  } = typesConfig[type];

  return (
    <div
      className={`
        w-96 max-w-sm rounded-lg shadow-lg border overflow-hidden
        transition-all duration-300 ease-in-out
        ${bgColor} ${borderColor}
        ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }
      `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="p-4">
        <div className="flex items-start">
          <Icon
            className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${textColor}`}
            aria-hidden="true"
          />
          <div className="flex-1">
            <h4 className={`${textColor} font-semibold`}>{title}</h4>
            <p
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {message}
            </p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                onClose();
              }, 300);
            }}
            className={`ml-4 p-1 rounded hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 ${closeColor}`}
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        className={`h-1 w-full ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        } rounded-b-lg overflow-hidden`}
      >
        <div
          className={`h-full ${progressColor} transition-width duration-100 ease-linear`}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default Toast;
