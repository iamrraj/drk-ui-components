import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

/**
 * Accordion Item Interface
 */
export interface AccordionItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Title/header text
   */
  title: string;

  /**
   * Content to display when expanded
   */
  content: React.ReactNode;

  /**
   * Whether this item is disabled
   */
  disabled?: boolean;
}

/**
 * Accordion Component Props
 */
export interface AccordionProps {
  /**
   * Array of accordion items
   */
  items: AccordionItem[];

  /**
   * Allow multiple items to be open at once
   * @default false
   */
  multiple?: boolean;

  /**
   * Initially expanded item IDs
   */
  defaultExpanded?: string[];

  /**
   * Controlled expanded item IDs
   */
  expanded?: string[];

  /**
   * Change handler for controlled mode
   */
  onChange?: (expanded: string[]) => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Accordion Component
 *
 * @component
 * @description
 * A collapsible content component for organizing information in expandable panels.
 *
 * Features:
 * - Single or multiple open panels
 * - Controlled or uncontrolled mode
 * - Smooth animations
 * - Keyboard accessible
 * - Full customization
 *
 * @example
 * ```tsx
 * import { Accordion } from 'drk-ui-components';
 *
 * const items = [
 *   {
 *     id: '1',
 *     title: 'What is React?',
 *     content: 'React is a JavaScript library for building user interfaces.'
 *   },
 *   {
 *     id: '2',
 *     title: 'What is TypeScript?',
 *     content: 'TypeScript is a typed superset of JavaScript.'
 *   }
 * ];
 *
 * <Accordion items={items} />
 * ```
 */
const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  defaultExpanded = [],
  expanded: controlledExpanded,
  onChange,
  className = "",
}) => {
  const [internalExpanded, setInternalExpanded] = useState<string[]>(defaultExpanded);

  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const toggleItem = (id: string) => {
    let newExpanded: string[];

    if (multiple) {
      newExpanded = expanded.includes(id)
        ? expanded.filter((item) => item !== id)
        : [...expanded, id];
    } else {
      newExpanded = expanded.includes(id) ? [] : [id];
    }

    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }
    onChange?.(newExpanded);
  };

  return (
    <div className={`${className || "border border-gray-200 rounded-lg divide-y"}`}>
      {items.map((item) => {
        const isExpanded = expanded.includes(item.id);

        return (
          <div key={item.id}>
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                item.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
              aria-expanded={isExpanded}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <BiChevronDown
                className={`text-gray-500 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExpanded && (
              <div className="p-4 pt-0 text-gray-600 animate-in fade-in slide-in-from-top-2 duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
