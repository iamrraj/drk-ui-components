import React from "react";
import Label from "./Label";
import Card from "./Card";
import Span from "./Span";

/**
 * Toggle Component Props
 *
 * @interface ToggleProps
 *
 * @description
 * Props for the Toggle component (switch/checkbox alternative)
 *
 * @example
 * ```tsx
 * <Toggle
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 * ```
 */
export interface ToggleProps {
  /**
   * Current checked state
   */
  checked: boolean;

  /**
   * Change event handler
   * @param checked - New checked state
   */
  onChange: (checked: boolean) => void;

  /**
   * Label text displayed above the toggle
   */
  label?: string;

  /**
   * Helper text shown in a tooltip (requires label)
   */
  helper_text?: string;
}

/**
 * Toggle Component
 *
 * @component
 * @description
 * A modern toggle switch component with smooth animations and accessibility support.
 * Perfect for on/off settings and feature flags. Displays "Enable" or "Disable" text.
 *
 * @param {ToggleProps} props - Component props
 * @returns {JSX.Element} Rendered toggle switch
 *
 * @example
 * ```tsx
 * import { Toggle } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function SettingsPanel() {
 *   const [darkMode, setDarkMode] = useState(false);
 *   const [notifications, setNotifications] = useState(true);
 *
 *   return (
 *     <>
 *       <Toggle
 *         checked={darkMode}
 *         onChange={setDarkMode}
 *         label="Dark Mode"
 *         helper_text="Enable dark theme for better visibility"
 *       />
 *
 *       <Toggle
 *         checked={notifications}
 *         onChange={setNotifications}
 *         label="Email Notifications"
 *       />
 *     </>
 *   );
 * }
 * ```
 */
const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  helper_text,
}) => {
  // Generate a unique ID to associate the label with the toggle
  const toggleId = `toggle-${
    label?.replace(/\s+/g, "-").toLowerCase() ||
    Math.random().toString(36).substr(2, 9)
  }`;

  return (
    <Card className="space-y-2 mb-4">
      {label && (
        <Label htmlFor={toggleId} helper_text={helper_text}>
          {label}
        </Label>
      )}
      <Card className="flex mt-2 items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`
            cursor-pointer
            relative inline-flex h-6 w-11 items-center rounded-full
            transition-colors duration-200 ease-in-out focus:outline-none
            ${checked ? "bg-primary-500" : "bg-gray-400"}
          `}
        >
          <Span
            className={`
              inline-block h-5 w-5 transform rounded-full bg-white shadow-lg
              transition-transform duration-200 ease-in-out
              ${checked ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
        <Span className="text-sm text-gray-900">
          {checked ? "Enable" : "Disable"}
        </Span>
      </Card>
    </Card>
  );
};

export default Toggle;
