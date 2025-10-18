/**
 * DRK UI Components Library
 *
 * @description
 * A comprehensive React component library built with TypeScript and Tailwind CSS.
 * Provides a collection of accessible, customizable, and production-ready components.
 *
 * @author DRK
 * @version 1.0.0
 *
 * @example
 * ```tsx
 * import { Button, Input, Modal, Dropdown } from 'drk-ui-components';
 * import 'drk-ui-components/dist/styles.css';
 * ```
 */

// Import styles
import "./styles/index.css";

// Basic Components
export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { default as Card } from "./components/Card";
export type { CardProps } from "./components/Card";

export { default as Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { default as Label } from "./components/Label";
export type { LabelProps } from "./components/Label";

export { default as Heading } from "./components/Heading";
export type { HeadingProps } from "./components/Heading";

export { default as Paragraph } from "./components/Paragraph";
export type { ParagraphProps } from "./components/Paragraph";

export { default as Span } from "./components/Span";
export type { SpanProps } from "./components/Span";

export { default as Badge } from "./components/Badge";
export type { BadgeProps, BadgeVariant } from "./components/Badge";

// Interactive Components
export { default as Toggle } from "./components/Toggle";
export type { ToggleProps } from "./components/Toggle";

export { default as Dropdown } from "./components/Dropdown";
export type { DropdownProps, DropdownOption } from "./components/Dropdown";

export { default as CustomMultiSelect } from "./components/CustomMultiSelect";
export type {
  CustomMultiSelectProps,
  SelectOption,
} from "./components/CustomMultiSelect";

// Modal Components
export { default as Modal } from "./components/Modal";
export type { ModalProps } from "./components/Modal";

export { default as ConfirmationModal } from "./components/ConfirmationModal";
export type { ConfirmationModalProps } from "./components/ConfirmationModal";

// Tooltip Components
export { default as Tooltip } from "./components/Tooltip";
export type { InfoTooltipProps } from "./components/Tooltip";

export { default as TooltipWrapper } from "./components/TooltipWrapper";
export type {
  TooltipWrapperProps,
  TooltipPosition,
} from "./components/TooltipWrapper";

// Toast Components
export { Toast, ToastProvider, useToast } from "./components/Toast";
export type {
  ToastProps,
  ToastType,
  ToastProviderProps,
  ToastProviderApi,
} from "./components/Toast";
