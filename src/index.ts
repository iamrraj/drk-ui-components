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

// Utilities
export { cn } from "./utils";
export type { ClassValue } from "./utils";

// Hooks
export { useDisclosure, useMediaQuery, usePrefersColorScheme } from "./hooks";
export type {
  UseDisclosureProps,
  UseDisclosureReturn,
  ColorScheme,
} from "./hooks";

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
export { default as VisuallyHidden } from "./components/VisuallyHidden";
export type { VisuallyHiddenProps } from "./components/VisuallyHidden";

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

export {
  default as Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./components/Popover";
export type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverCloseProps,
  PopoverSide,
  PopoverAlign,
} from "./components/Popover";

// Toast Components
export { Toast, ToastProvider, useToast } from "./components/Toast";
export type {
  ToastProps,
  ToastType,
  ToastProviderProps,
  ToastProviderApi,
} from "./components/Toast";

// Loading & Feedback Components
export { default as Spinner } from "./components/Spinner";
export type { SpinnerProps, SpinnerSize } from "./components/Spinner";

export { default as Skeleton } from "./components/Skeleton";
export type { SkeletonProps } from "./components/Skeleton";

export { default as Progress } from "./components/Progress";
export type { ProgressProps, ProgressSize } from "./components/Progress";

export { default as Alert } from "./components/Alert";
export type { AlertProps, AlertVariant } from "./components/Alert";

// Display Components
export { default as Avatar } from "./components/Avatar";
export type { AvatarProps, AvatarSize } from "./components/Avatar";

export { default as Divider } from "./components/Divider";
export type { DividerProps, DividerOrientation } from "./components/Divider";

// Form Components
export { default as Checkbox } from "./components/Checkbox";
export type { CheckboxProps } from "./components/Checkbox";

export { default as Radio } from "./components/Radio";
export type { RadioProps } from "./components/Radio";

export { default as Textarea } from "./components/Textarea";
export type { TextareaProps } from "./components/Textarea";

export { default as Slider } from "./components/Slider";
export type { SliderProps } from "./components/Slider";

// Navigation Components
export { default as Sidebar } from "./components/Sidebar";
export type {
  SidebarProps,
  MenuItem,
  UserInfo,
  UserMenuItem,
} from "./components/Sidebar";

export { default as Pagination } from "./components/Pagination";
export type { PaginationProps } from "./components/Pagination";

export { default as Tabs } from "./components/Tabs";
export type { TabsProps, TabItem } from "./components/Tabs";

// Layout Components
export { default as Accordion } from "./components/Accordion";
export type { AccordionProps, AccordionItem } from "./components/Accordion";

export { default as Stack } from "./components/Stack";
export type {
  StackProps,
  StackDirection,
  StackGap,
  StackAlign,
  StackJustify,
} from "./components/Stack";

export {
  default as Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/Sheet";
export type {
  SheetProps,
  SheetTriggerProps,
  SheetContentProps,
  SheetCloseProps,
  SheetHeaderProps,
  SheetFooterProps,
  SheetTitleProps,
  SheetDescriptionProps,
  SheetSide,
} from "./components/Sheet";

// Data Display Components
export { default as Table } from "./components/Table";
export type { TableProps, TableColumn } from "./components/Table";
