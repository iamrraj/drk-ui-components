import React, { createContext, ReactNode, useCallback, useState, useContext } from "react";
import Toast, { ToastType } from "./Toast";

/**
 * Toast State Interface
 *
 * @interface ToastState
 * @description Defines the structure of a single toast object
 */
interface ToastState {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  duration: number;
}

/**
 * Add Toast Payload Interface
 *
 * @interface AddToastPayload
 * @description Defines the shape of arguments for adding a new toast
 */
interface AddToastPayload {
  title: string;
  message: string;
  type: ToastType;
  duration: number;
}

/**
 * Toast Context Type Interface
 *
 * @interface ToastContextType
 * @description Defines the shape of the context value
 */
interface ToastContextType {
  addToast: (payload: AddToastPayload) => string;
  removeToast: (id: string) => void;
}

/**
 * Toast Provider API Interface
 *
 * @interface ToastProviderApi
 * @description API methods provided by the toast hook
 */
export interface ToastProviderApi {
  success: (title: string, message: string, duration?: number) => string;
  error: (title: string, message: string, duration?: number) => string;
  warning: (title: string, message: string, duration?: number) => string;
  info: (title: string, message: string, duration?: number) => string;
}

/**
 * Toast Provider Props
 *
 * @interface ToastProviderProps
 * @description Props accepted by the ToastProvider component
 */
export interface ToastProviderProps {
  /**
   * Content to be wrapped by the provider
   */
  children: ReactNode;

  /**
   * Position of the toast container on screen
   * @default "right"
   */
  position?: "left" | "center" | "right";

  /**
   * Default theme for toasts
   * @default "light"
   */
  theme?: "light" | "dark";
}

// Create the React context
const ToastContext = createContext<ToastContextType | null>(null);

/**
 * ToastProvider Component
 *
 * @component
 * @description
 * Manages the state of active toasts and renders them in a fixed position.
 * Provides a context for adding and removing toasts from anywhere within its children.
 *
 * Features:
 * - Multiple toast notifications
 * - Configurable position (left, center, right)
 * - Theme support (light, dark)
 * - Auto-stacking of multiple toasts
 * - Global access via useToast hook
 *
 * @param {ToastProviderProps} props - Component props
 * @returns {JSX.Element} Provider with toast container
 *
 * @example
 * ```tsx
 * import { ToastProvider } from '@iamrraj/drk-ui-components';
 *
 * function App() {
 *   return (
 *     <ToastProvider position="right" theme="dark">
 *       <YourApp />
 *     </ToastProvider>
 *   );
 * }
 * ```
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "right",
  theme = "light",
}) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const addToast = useCallback((payload: AddToastPayload): string => {
    const id = Math.random().toString(36).substring(2, 11);
    setToasts((prevToasts) => [...prevToasts, { id, ...payload }]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const positionClass =
    position === "left"
      ? "left-4"
      : position === "center"
      ? "left-1/2 transform -translate-x-1/2"
      : "right-4";

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        className={`fixed top-4 ${positionClass} space-y-4 z-[100]`}
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            theme={theme}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

/**
 * useToast Hook
 *
 * @hook
 * @description
 * Custom hook to access toast functionality from any component within ToastProvider.
 * Provides convenient methods to show success, error, warning, and info toasts.
 *
 * @returns {ToastProviderApi} Object with toast methods
 * @throws {Error} If used outside of ToastProvider
 *
 * @example
 * ```tsx
 * import { useToast } from '@iamrraj/drk-ui-components';
 *
 * function MyComponent() {
 *   const toast = useToast();
 *
 *   const handleSave = () => {
 *     // Show success toast
 *     toast.success('Saved!', 'Your changes have been saved');
 *   };
 *
 *   const handleError = () => {
 *     // Show error toast
 *     toast.error('Error!', 'Something went wrong', 5000);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleSave}>Save</button>
 *       <button onClick={handleError}>Test Error</button>
 *     </div>
 *   );
 * }
 * ```
 */
export const useToast = (): ToastProviderApi => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { addToast } = context;

  return {
    success: (title: string, message: string, duration: number = 3000) =>
      addToast({ title, message, type: "success", duration }),
    error: (title: string, message: string, duration: number = 3000) =>
      addToast({ title, message, type: "error", duration }),
    warning: (title: string, message: string, duration: number = 3000) =>
      addToast({ title, message, type: "warning", duration }),
    info: (title: string, message: string, duration: number = 3000) =>
      addToast({ title, message, type: "info", duration }),
  };
};

export { ToastContext };
