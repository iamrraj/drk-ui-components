import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { createPortal } from "react-dom";
import Label from "./Label";
import Paragraph from "./Paragraph";
import Card from "./Card";
import Button from "./Button";

/**
 * Multi-Select Option Interface
 *
 * @interface SelectOption
 *
 * @description
 * Structure for multi-select dropdown options
 */
export interface SelectOption {
  /**
   * Unique identifier for the option
   */
  id: string;

  /**
   * Display name for the option
   */
  name: string;
}

/**
 * CustomMultiSelect Component Props
 *
 * @interface CustomMultiSelectProps
 *
 * @description
 * Props for the CustomMultiSelect component supporting both single and multiple selection
 */
export interface CustomMultiSelectProps {
  /**
   * Array of available options
   */
  options: SelectOption[];

  /**
   * Array of currently selected item IDs
   */
  selectedItems: string[];

  /**
   * Callback function triggered when selection changes
   * @param selected - Array of selected item IDs
   */
  onSelect: (selected: string[]) => void;

  /**
   * Label for the select field
   */
  label: string;

  /**
   * Whether multiple items can be selected
   * @default true
   */
  multiple?: boolean;

  /**
   * Additional CSS classes for the select field (Tailwind CSS supported)
   */
  classes?: string;

  /**
   * Placeholder text when no items are selected
   */
  placeholder?: string;
}

/**
 * CustomMultiSelect Component
 *
 * @component
 * @description
 * A versatile select component that supports both single and multiple selections,
 * with built-in filtering and custom styling. Features include:
 * - Single or multiple selection modes
 * - Real-time search/filter
 * - Custom placeholder text
 * - Display selected count (e.g., "Item 1 +2 more")
 * - Fixed positioning using portal for proper layering
 * - Full Tailwind CSS customization
 *
 * Perfect for forms, filters, and any scenario requiring item selection.
 *
 * @param {CustomMultiSelectProps} props - Component props
 * @returns {JSX.Element} Rendered multi-select component
 *
 * @example
 * ```tsx
 * import { CustomMultiSelect } from 'drk-ui-components';
 * import { useState } from 'react';
 *
 * function MyForm() {
 *   const options = [
 *     { id: '1', name: 'React' },
 *     { id: '2', name: 'Vue' },
 *     { id: '3', name: 'Angular' },
 *     { id: '4', name: 'Svelte' },
 *   ];
 *
 *   const [selected, setSelected] = useState<string[]>([]);
 *
 *   return (
 *     <CustomMultiSelect
 *       options={options}
 *       selectedItems={selected}
 *       onSelect={setSelected}
 *       label="Select Frameworks"
 *       placeholder="Choose frameworks"
 *       multiple={true}
 *     />
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Single selection mode
 * const [selectedId, setSelectedId] = useState<string[]>([]);
 *
 * <CustomMultiSelect
 *   options={categories}
 *   selectedItems={selectedId}
 *   onSelect={setSelectedId}
 *   label="Category"
 *   multiple={false}
 *   classes="bg-gray-50"
 * />
 * ```
 */
const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  options,
  selectedItems,
  onSelect,
  label,
  multiple = true,
  classes,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
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
        setIsOpen(false);
        setSearchTerm("");
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

  // Calculate dropdown position when it opens
  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY, // Position directly below the trigger
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    updatePosition();

    if (isOpen) {
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [isOpen]);

  /**
   * Handles changes to the search input field
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Filters options based on the current search term
   */
  const filteredOptions = options?.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Handles item selection logic
   */
  const handleSelection = (id: string) => {
    if (multiple) {
      // Multiple selection logic
      if (selectedItems.includes(id)) {
        onSelect(selectedItems?.filter((selected) => selected !== id));
      } else {
        onSelect([...selectedItems, id]);
      }
    } else {
      // Single selection logic
      onSelect([id]);
      setIsOpen(false);
    }
  };

  /**
   * Renders the currently selected items or placeholder
   */
  const renderSelectedItems = () => {
    if (selectedItems.length === 0) {
      return `${placeholder || label}`;
    }
    const selectedNames = options
      ?.filter((option) => selectedItems.includes(option.id))
      ?.map((option) => option.name);

    if (selectedNames.length === 1 || !multiple) {
      return selectedNames[0];
    } else {
      return `${
        selectedNames[0]
      } <span class='text-primary-500 ml-1 font-bold'>+${
        selectedNames.length - 1
      } more</span>`;
    }
  };

  /**
   * Toggles the dropdown's open state
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full" ref={triggerRef}>
      <Label>{label}</Label>
      <Button
        onClick={toggleDropdown}
        className={`${
          classes || "bg-white"
        } border shadow-sm focus:border-primary-500 h-10 py-2 w-full border-gray-300 text-black text-left rounded-lg focus:outline-none flex items-center justify-between`}
      >
        <p
          className={`${
            selectedItems?.length === 0 ? "text-gray-500" : "text-gray-800"
          } px-3 flex justify-center text-sm items-center capitalize`}
          dangerouslySetInnerHTML={{ __html: renderSelectedItems() }}
        ></p>
        <Card className="text-gray-800 h-full text-xl w-8 rounded-r-md flex justify-center items-center">
          {isOpen ? <BiChevronUp /> : <BiChevronDown />}
        </Card>
      </Button>

      {isOpen &&
        createPortal(
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
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-b border-gray-300 bg-white text-black focus:outline-none"
            />

            <Card className="max-h-60 overflow-y-auto mt-2">
              {filteredOptions?.length > 0 ? (
                filteredOptions?.map((option) => (
                  <Card
                    key={option.id}
                    className="flex px-3 text-gray-800 items-center gap-2 py-1.5 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      aria-label={option.name}
                      checked={selectedItems.includes(option.id)}
                      onChange={() => handleSelection(option.id)}
                      disabled={!multiple}
                      className="cursor-pointer"
                    />
                    <label className="cursor-pointer flex-1">{option.name}</label>
                  </Card>
                ))
              ) : (
                <Paragraph className="p-2 text-gray-800">
                  No options found
                </Paragraph>
              )}
            </Card>
          </div>,
          document.body
        )}
    </div>
  );
};

export default CustomMultiSelect;
