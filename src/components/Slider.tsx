import React from "react";

/**
 * Slider Component Props
 */
export interface SliderProps {
  /**
   * Current value
   */
  value?: number;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number;

  /**
   * Minimum value
   * @default 0
   */
  min?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Step increment
   * @default 1
   */
  step?: number;

  /**
   * Whether slider is disabled
   */
  disabled?: boolean;

  /**
   * Label text
   */
  label?: string;

  /**
   * Whether to show value label
   */
  showValue?: boolean;

  /**
   * Change handler
   */
  onChange?: (value: number) => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Slider Component
 *
 * @component
 * @description
 * A range slider component for numeric input.
 *
 * @example
 * ```tsx
 * import { Slider } from 'drk-ui-components';
 *
 * <Slider
 *   label="Volume"
 *   min={0}
 *   max={100}
 *   defaultValue={50}
 *   showValue
 * />
 * ```
 */
const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  showValue = false,
  onChange,
  className = "",
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <label className="text-sm font-medium text-gray-700">{label}</label>
          )}
          {showValue && (
            <span className="text-sm font-medium text-gray-900">{value}</span>
          )}
        </div>
      )}

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed accent-primary-500"
          style={{
            background: `linear-gradient(to right, rgb(14 165 233) 0%, rgb(14 165 233) ${percentage}%, rgb(229 231 235) ${percentage}%, rgb(229 231 235) 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
