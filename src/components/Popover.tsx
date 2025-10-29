import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type MutableRefObject,
  type ReactElement,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { cn } from "../utils";

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

const usePopoverContext = (component: string) => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error(`${component} must be used within a <Popover />`);
  }

  return context;
};

export interface PopoverProps {
  /**
   * Controls the visibility of the popover (controlled mode)
   */
  open?: boolean;
  /**
   * Initial visibility in uncontrolled mode
   */
  defaultOpen?: boolean;
  /**
   * Callback fired when the open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Wrapper class name applied to the root container
   */
  className?: string;
  /**
   * Popover children. Include `PopoverTrigger` and `PopoverContent`.
   */
  children: ReactNode;
}

export const Popover = ({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  className,
}: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isControlled = openProp !== undefined;
  const open = isControlled ? Boolean(openProp) : internalOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const value = useMemo(
    () => ({
      open,
      setOpen,
      containerRef,
    }),
    [open, setOpen],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      if (event.target instanceof Node && !container.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  return (
    <PopoverContext.Provider value={value}>
      <div ref={containerRef} className={cn("relative inline-flex", className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export interface PopoverTriggerProps {
  /**
   * Element that toggles the popover. Must accept `ref` and `onClick` props.
   */
  children: ReactElement<any, any>;
  /**
   * Disable toggling behaviour while keeping the trigger rendered.
   */
  disabled?: boolean;
}

export const PopoverTrigger = ({ children, disabled = false }: PopoverTriggerProps) => {
  const { open, setOpen } = usePopoverContext("PopoverTrigger");

  if (!children) {
    return null;
  }

  const handleClick = (event: ReactMouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    if (event.defaultPrevented || disabled) {
      return;
    }
    setOpen(!open);
  };

  return cloneElement(children, {
    onClick: handleClick,
    "aria-haspopup": "dialog",
    "aria-expanded": open,
    "data-state": open ? "open" : "closed",
  });
};

export type PopoverSide = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Side of the trigger where the content should appear.
   * @default "bottom"
   */
  side?: PopoverSide;
  /**
   * Alignment relative to the trigger.
   * @default "center"
   */
  align?: PopoverAlign;
  /**
   * Additional content rendered such as arrow indicators.
   */
  children: ReactNode;
}

const sideClasses: Record<PopoverSide, string> = {
  top: "bottom-full mb-2",
  bottom: "top-full mt-2",
  left: "right-full mr-2",
  right: "left-full ml-2",
};

const alignClasses: Record<PopoverAlign, string> = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

const horizontalAlignClasses: Record<PopoverAlign, string> = {
  start: "top-0",
  center: "top-1/2 -translate-y-1/2",
  end: "bottom-0",
};

export const PopoverContent = ({
  children,
  className,
  side = "bottom",
  align = "center",
  ...props
}: PopoverContentProps) => {
  const { open } = usePopoverContext("PopoverContent");

  if (!open) {
    return null;
  }

  const isHorizontal = side === "left" || side === "right";

  return (
    <div
      className={cn(
        "absolute z-50 min-w-[12rem] rounded-lg border border-gray-200 bg-white p-4 shadow-lg",
        sideClasses[side],
        isHorizontal ? horizontalAlignClasses[align] : alignClasses[align],
        "animate-in fade-in zoom-in duration-150",
        className,
      )}
      role="dialog"
      {...props}
    >
      {children}
    </div>
  );
};

export interface PopoverCloseProps {
  /**
   * Render prop for a close button/content.
   */
  children: ReactElement<any, any>;
}

export const PopoverClose = ({ children }: PopoverCloseProps) => {
  const { setOpen } = usePopoverContext("PopoverClose");

  const handleClick = (event: ReactMouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    if (event.defaultPrevented) return;
    setOpen(false);
  };

  return cloneElement(children, {
    onClick: handleClick,
    "data-popover-close": "",
  });
};

Popover.displayName = "Popover";
PopoverTrigger.displayName = "PopoverTrigger";
PopoverContent.displayName = "PopoverContent";
PopoverClose.displayName = "PopoverClose";

export default Popover;
