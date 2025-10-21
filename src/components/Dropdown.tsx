import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiChevronDown, BiChevronUp, BiX } from "react-icons/bi";
import { createPortal } from "react-dom";

/**
 * Dropdown Option Interface
 *
 * @interface DropdownOption
 *
 * @description
 * Structure for dropdown options
 */
export interface DropdownOption {
  /**
   * Unique identifier for the option
   */
  id: string | number;

  /**
   * Display label for the option
   */
  label: string;
}

/**
 * Dropdown Component Props
 *
 * @interface DropdownProps
 *
 * @description
 * Props for the Dropdown component with search and keyboard navigation
 */
export interface DropdownProps {
  /**
   * Available options to select from
   */
  options: DropdownOption[];

  /**
   * Currently selected option
   */
  selectedOption: DropdownOption | null;

  /**
   * Selection change handler
   * @param option - The selected option
   */
  onSelect: (option: DropdownOption) => void;

  /**
   * Placeholder text when no option is selected
   * @default "Select an option"
   */
  placeholder?: string;

  /**
   * Clear selection handler (optional)
   */
  onClear?: () => void;

  /**
   * Additional CSS classes (Tailwind CSS supported)
   */
  className?: string;

  /**
   * Disables the dropdown if true
   * @default false
   */
  disabled?: boolean;

  /**
   * Tab index for keyboard navigation
   */
  tabIndex?: number;
}

/**
 * Dropdown Component
 *
 * @component
 * @description
 * A fully-featured dropdown/select component with:
 * - Search/filter functionality
 * - Keyboard navigation (Arrow keys, Enter, Escape, Tab)
 * - Clear button for selected values
 * - Portal-based rendering for proper z-index handling
 * - Full Tailwind CSS customization support
 *
 * The dropdown uses React Portal to render the options list,
 * ensuring it appears above other content regardless of parent z-index.
 *
 * @param {DropdownProps} props - Component props
 * @returns {JSX.Element} Rendered dropdown component
 *
 * @example
 * ```tsx
 * import { Dropdown } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function MyComponent() {
 *   const options = [
 *     { id: 1, label: 'Option 1' },
 *     { id: 2, label: 'Option 2' },
 *     { id: 3, label: 'Option 3' },
 *   ];
 *
 *   const [selected, setSelected] = useState(null);
 *
 *   return (
 *     <Dropdown
 *       options={options}
 *       selectedOption={selected}
 *       onSelect={setSelected}
 *       placeholder="Choose an option"
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // With clear functionality
 * <Dropdown
 *   options={countries}
 *   selectedOption={selectedCountry}
 *   onSelect={setSelectedCountry}
 *   onClear={() => setSelectedCountry(null)}
 *   placeholder="Select a country"
 *   className="w-full"
 * />
 * ```
 */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  placeholder = "Select an option",
  onClear,
  className = "",
  disabled = false,
  tabIndex,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<Document>) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyboardNavigation = (event: KeyboardEvent<Document>) => {
      if (!isDropdownOpen) return;
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % filteredOptions.length
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev === null
            ? filteredOptions.length - 1
            : (prev - 1 + filteredOptions.length) % filteredOptions.length
        );
      } else if (event.key === "Enter" && highlightedIndex !== null) {
        event.preventDefault();
        onSelect(filteredOptions[highlightedIndex]);
        setIsDropdownOpen(false);
        setSearchQuery("");
      } else if (event.key === "Escape") {
        event.preventDefault();
        setIsDropdownOpen(false);
        setSearchQuery("");
      } else if (event.key === "Tab") {
        setIsDropdownOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener(
      "keydown",
      handleKeyboardNavigation as unknown as EventListener
    );
    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyboardNavigation as unknown as EventListener
      );
  }, [isDropdownOpen, searchQuery, options, highlightedIndex, onSelect]);

  // Calculate dropdown position when it opens
  useEffect(() => {
    const updatePosition = () => {
      if (isDropdownOpen && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY, // Position directly below the trigger
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    updatePosition();

    if (isDropdownOpen) {
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isDropdownOpen]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsDropdownOpen(!isDropdownOpen);
      if (!isDropdownOpen) {
        setSearchQuery("");
      }
    }
  };

  const clearSelection = () => {
    onSelect({ id: "", label: "" });
    setSearchQuery("");
    if (onClear) onClear();
  };

  const filteredOptions = options?.filter((option) =>
    option?.label?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  // Dropdown content rendered in portal
  const dropdownContent = isDropdownOpen ? (
    <div
      ref={dropdownRef}
      className="bg-white border min-w-[200px] max-w-full w-full border-gray-300 rounded-lg shadow-lg z-50"
      style={{
        position: "fixed",
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: `${dropdownPosition.width}px`,
      }}
    >
      <ul className="max-h-[300px] overflow-auto">
        {filteredOptions?.map((option, index) => (
          <li
            role="option"
            aria-selected={option?.id === selectedOption?.id}
            key={option?.id}
            onClick={() => {
              onSelect(option);
              setIsDropdownOpen(false);
              setSearchQuery("");
            }}
            className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${
              option?.label === selectedOption?.label
                ? "bg-primary-500 text-white"
                : highlightedIndex === index
                ? "bg-primary-500"
                : "hover:bg-primary-200"
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  return (
    <>
      <div
        ref={triggerRef}
        className="relative w-full"
        data-testid={`dropdown-${placeholder}`}
      >
        <div
          className={`${
            className ||
            "bg-white rounded-lg shadow-sm focus-within:border-primary-500 border-gray-300"
          } border  py-2 w-full  text-black text-left  flex items-center justify-between h-10 ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            disabled={disabled}
            value={isDropdownOpen ? searchQuery : selectedOption?.label || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => !disabled && setIsDropdownOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                setIsDropdownOpen(false);
                setSearchQuery("");
              } else if (e.key === "Escape") {
                setIsDropdownOpen(false);
                setSearchQuery("");
              }
            }}
            onBlur={() => {
              setTimeout(() => {
                if (!document.activeElement?.closest('[role="option"]')) {
                  setIsDropdownOpen(false);
                  setSearchQuery("");
                }
              }, 150);
            }}
            placeholder={placeholder}
            tabIndex={tabIndex}
            className="pl-2 capitalize w-full truncate flex-1 bg-transparent focus:outline-none"
          />
          {selectedOption && !isDropdownOpen && (
            <button
              disabled={disabled}
              aria-label="Clear selection"
              data-testid={`clear-${placeholder}`}
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="text-primary-500 hover:bg-primary-500 hover:text-white rounded-full cursor-pointer mr-2"
            >
              <BiX />
            </button>
          )}
          <button
            disabled={disabled}
            onClick={toggleDropdown}
            tabIndex={-1}
            className="text-gray-800 h-full text-xl w-8 rounded-r-md flex justify-center items-center"
          >
            {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
          </button>
        </div>
      </div>
      {createPortal(dropdownContent, document.body)}
    </>
  );
};

export default Dropdown;
