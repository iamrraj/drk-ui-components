import { useCallback, useMemo, useState } from "react";

export interface UseDisclosureProps {
  /**
   * Controls the open state (controlled mode).
   */
  open?: boolean;
  /**
   * Initial state when uncontrolled.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Called whenever the open state changes.
   */
  onOpenChange?: (open: boolean) => void;
}

export interface UseDisclosureReturn {
  /** Current state indicating whether the disclosure is open. */
  isOpen: boolean;
  /** Opens the disclosure. */
  open: () => void;
  /** Closes the disclosure. */
  close: () => void;
  /** Toggles the disclosure state. */
  toggle: () => void;
  /** Sets the state directly. */
  setOpen: (next: boolean) => void;
}

/**
 * Utility hook to manage open/close/toggle state with optional controlled behaviour.
 */
export const useDisclosure = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
}: UseDisclosureProps = {}): UseDisclosureReturn => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const isOpen = isControlled ? Boolean(openProp) : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  return useMemo(
    () => ({
      isOpen,
      open,
      close,
      toggle,
      setOpen,
    }),
    [close, isOpen, open, setOpen, toggle],
  );
};

export default useDisclosure;
