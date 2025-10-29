import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useId,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | null>(null);

const useSheetContext = (component: string) => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error(`${component} must be used within a <Sheet />`);
  }
  return context;
};

export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Sheet = ({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
}: SheetProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
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
    }),
    [open, setOpen],
  );

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
};

export interface SheetTriggerProps {
  children: ReactElement<any, any>;
}

export const SheetTrigger = ({ children }: SheetTriggerProps) => {
  const { open, setOpen } = useSheetContext("SheetTrigger");

  const handleClick = (event: ReactMouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    if (event.defaultPrevented) return;
    setOpen(!open);
  };

  return cloneElement(children, {
    onClick: handleClick,
    "aria-haspopup": "dialog",
    "aria-expanded": open,
  });
};

export type SheetSide = "left" | "right" | "top" | "bottom";

const panelSideClasses: Record<SheetSide, string> = {
  right: "right-0 top-0 h-full w-full max-w-lg",
  left: "left-0 top-0 h-full w-full max-w-lg",
  top: "left-0 top-0 w-full max-h-[90vh]",
  bottom: "left-0 bottom-0 w-full max-h-[90vh]",
};

const panelAnimationClasses: Record<SheetSide, string> = {
  right: "animate-in slide-in-from-right duration-300",
  left: "animate-in slide-in-from-left duration-300",
  top: "animate-in slide-in-from-top duration-300",
  bottom: "animate-in slide-in-from-bottom duration-300",
};

interface SheetContentContextValue {
  setTitleId: (id?: string) => void;
  setDescriptionId: (id?: string) => void;
}

const SheetContentContext = createContext<SheetContentContextValue | null>(null);

const useSheetContentContext = (component: string) => {
  const context = useContext(SheetContentContext);
  if (!context) {
    throw new Error(`${component} must be used within <SheetContent />`);
  }
  return context;
};

export interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: SheetSide;
  children: ReactNode;
  showOverlay?: boolean;
}

export const SheetContent = ({
  children,
  className,
  side = "right",
  showOverlay = true,
  ...props
}: SheetContentProps) => {
  const { open, setOpen } = useSheetContext("SheetContent");
  const [mounted, setMounted] = useState(false);
  const [titleId, setTitleId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, setOpen]);

  const content = (
    <SheetContentContext.Provider value={{ setTitleId, setDescriptionId }}>
      {showOverlay && (
        <div
          className="fixed inset-0 z-40 bg-gray-950/40 backdrop-blur-sm"
          role="presentation"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "fixed z-50 overflow-y-auto bg-white shadow-xl border border-gray-200",
          panelSideClasses[side],
          panelAnimationClasses[side],
          "p-6",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        {...props}
      >
        {children}
      </div>
    </SheetContentContext.Provider>
  );

  if (!mounted || !open) {
    return null;
  }

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(content, document.body);
};

export interface SheetCloseProps {
  children: ReactElement<any, any>;
}

export const SheetClose = ({ children }: SheetCloseProps) => {
  const { setOpen } = useSheetContext("SheetClose");

  const handleClick = (event: ReactMouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);
    if (event.defaultPrevented) return;
    setOpen(false);
  };

  return cloneElement(children, {
    onClick: handleClick,
    "data-sheet-close": "",
  });
};

export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SheetHeader = ({ children, className, ...props }: SheetHeaderProps) => (
  <div
    className={cn("mb-4 flex flex-col gap-1", className)}
    {...props}
  >
    {children}
  </div>
);

export interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SheetFooter = ({ children, className, ...props }: SheetFooterProps) => (
  <div
    className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  >
    {children}
  </div>
);

export interface SheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const SheetTitle = ({ children, className, id, ...props }: SheetTitleProps) => {
  const { setTitleId } = useSheetContentContext("SheetTitle");
  const autoId = useId();
  const titleId = id ?? autoId;

  useEffect(() => {
    setTitleId(titleId);
    return () => setTitleId(undefined);
  }, [setTitleId, titleId]);

  return (
    <h2 id={titleId} className={cn("text-lg font-semibold text-gray-900", className)} {...props}>
      {children}
    </h2>
  );
};

export interface SheetDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const SheetDescription = ({ children, className, id, ...props }: SheetDescriptionProps) => {
  const { setDescriptionId } = useSheetContentContext("SheetDescription");
  const autoId = useId();
  const descriptionId = id ?? autoId;

  useEffect(() => {
    setDescriptionId(descriptionId);
    return () => setDescriptionId(undefined);
  }, [descriptionId, setDescriptionId]);

  return (
    <p
      id={descriptionId}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    >
      {children}
    </p>
  );
};

Sheet.displayName = "Sheet";
SheetTrigger.displayName = "SheetTrigger";
SheetContent.displayName = "SheetContent";
SheetClose.displayName = "SheetClose";
SheetHeader.displayName = "SheetHeader";
SheetFooter.displayName = "SheetFooter";
SheetTitle.displayName = "SheetTitle";
SheetDescription.displayName = "SheetDescription";

export default Sheet;
