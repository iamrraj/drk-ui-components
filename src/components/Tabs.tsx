import React, { useState } from "react";

/**
 * Tab Item Interface
 */
export interface TabItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Tab label
   */
  label: string;

  /**
   * Tab content
   */
  content: React.ReactNode;

  /**
   * Whether this tab is disabled
   */
  disabled?: boolean;

  /**
   * Icon to display before label
   */
  icon?: React.ReactNode;
}

/**
 * Tabs Component Props
 */
export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];

  /**
   * Default active tab ID
   */
  defaultTab?: string;

  /**
   * Controlled active tab ID
   */
  activeTab?: string;

  /**
   * Change handler
   */
  onChange?: (tabId: string) => void;

  /**
   * Additional CSS classes for container
   */
  className?: string;

  /**
   * Additional CSS classes for tab buttons
   */
  tabClassName?: string;

  /**
   * Additional CSS classes for content area
   */
  contentClassName?: string;
}

/**
 * Tabs Component
 *
 * @component
 * @description
 * A tab navigation component for organizing content into separate views.
 *
 * Features:
 * - Controlled or uncontrolled mode
 * - Keyboard navigation
 * - Icon support
 * - Disabled tabs
 * - Full customization
 *
 * @example
 * ```tsx
 * import { Tabs } from 'drk-ui-components';
 *
 * const tabs = [
 *   { id: '1', label: 'Profile', content: <ProfileForm /> },
 *   { id: '2', label: 'Settings', content: <SettingsForm /> },
 *   { id: '3', label: 'Billing', content: <BillingInfo /> }
 * ];
 *
 * <Tabs items={tabs} defaultTab="1" />
 * ```
 */
const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  className = "",
  tabClassName,
  contentClassName,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab || items[0]?.id
  );

  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (id: string) => {
    if (!isControlled) {
      setInternalActiveTab(id);
    }
    onChange?.(id);
  };

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={activeTab === item.id}
            onClick={() => !item.disabled && handleTabClick(item.id)}
            disabled={item.disabled}
            className={`${
              tabClassName ||
              "px-4 py-2 font-medium text-sm transition-colors relative"
            } ${
              activeTab === item.id
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-gray-600 hover:text-gray-900"
            } ${
              item.disabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={contentClassName || "p-4"} role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
