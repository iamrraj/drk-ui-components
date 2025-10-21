import React, { useState, useEffect, useRef } from "react";
import {
  BiMenu,
  BiChevronDown,
  BiChevronRight,
  BiCog,
  BiLogOut,
} from "react-icons/bi";
import { createPortal } from "react-dom";

/**
 * Menu Item Interface
 *
 * @interface MenuItem
 * @description Structure for sidebar menu items with nested support
 */
export interface MenuItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Display label
   */
  label: string;

  /**
   * Icon component (from react-icons or custom)
   */
  icon?: React.ReactNode;

  /**
   * Navigation URL
   */
  url?: string;

  /**
   * Badge/count to display
   */
  badge?: string | number;

  /**
   * Nested menu items
   */
  children?: MenuItem[];

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Whether this item is currently active
   */
  active?: boolean;

  /**
   * Whether to show divider after this item
   */
  divider?: boolean;
}

/**
 * User Info Interface
 *
 * @interface UserInfo
 * @description User information for sidebar footer
 */
export interface UserInfo {
  /**
   * User's full name
   */
  name: string;

  /**
   * User's email
   */
  email?: string;

  /**
   * Avatar image URL
   */
  avatar?: string;

  /**
   * User initials (fallback for avatar)
   */
  initials?: string;

  /**
   * User's role or position
   */
  role?: string;
}

/**
 * User Menu Item Interface
 *
 * @interface UserMenuItem
 * @description Menu items for user dropdown
 */
export interface UserMenuItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Display label
   */
  label: string;

  /**
   * Icon component
   */
  icon?: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Whether to show divider after this item
   */
  divider?: boolean;

  /**
   * Whether this item is destructive (e.g., logout)
   */
  destructive?: boolean;
}

/**
 * Sidebar Component Props
 *
 * @interface SidebarProps
 * @description Props for the Sidebar component
 */
export interface SidebarProps {
  /**
   * Logo content (image, text, or custom component)
   */
  logo?: React.ReactNode;

  /**
   * Menu items array (supports nesting)
   */
  menuItems: MenuItem[];

  /**
   * User information for footer section
   */
  user?: UserInfo;

  /**
   * User menu items for dropdown
   */
  userMenuItems?: UserMenuItem[];

  /**
   * Whether sidebar is collapsed
   * @default false
   */
  collapsed?: boolean;

  /**
   * Collapse toggle handler
   */
  onCollapse?: (collapsed: boolean) => void;

  /**
   * Navigation handler (receives url)
   */
  onNavigate?: (url: string) => void;

  /**
   * Settings click handler
   */
  onSettings?: () => void;

  /**
   * Logout click handler
   */
  onLogout?: () => void;

  /**
   * Additional CSS classes for sidebar container
   */
  className?: string;

  /**
   * Additional CSS classes for menu items
   */
  menuClassName?: string;

  /**
   * Additional CSS classes for user section
   */
  userClassName?: string;

  /**
   * Whether to show settings in user menu
   * @default true
   */
  showSettings?: boolean;

  /**
   * Whether to show logout in user menu
   * @default true
   */
  showLogout?: boolean;
}

/**
 * Menu Item Component (Internal)
 */
const SidebarMenuItem: React.FC<{
  item: MenuItem;
  collapsed: boolean;
  level?: number;
  onNavigate?: (url: string) => void;
  menuClassName?: string;
}> = ({ item, collapsed, level = 0, onNavigate, menuClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const indent = level * 12;

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    } else if (item.url && onNavigate) {
      onNavigate(item.url);
    }

    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          menuClassName ||
          "w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg group"
        } ${item.active ? "bg-primary-100 text-primary-600 font-medium" : ""}`}
        style={{ paddingLeft: collapsed ? "1rem" : `${1 + indent / 16}rem` }}
        title={collapsed ? item.label : undefined}
      >
        {item.icon && (
          <span className="flex-shrink-0 text-xl">{item.icon}</span>
        )}

        {!collapsed && (
          <>
            <span className="flex-1 text-left text-sm">{item.label}</span>

            {item.badge && (
              <span className="px-2 py-0.5 text-xs bg-primary-500 text-white rounded-full">
                {item.badge}
              </span>
            )}

            {hasChildren && (
              <span className="flex-shrink-0 text-lg">
                {isOpen ? <BiChevronDown /> : <BiChevronRight />}
              </span>
            )}
          </>
        )}
      </button>

      {hasChildren && isOpen && !collapsed && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <SidebarMenuItem
              key={child.id}
              item={child}
              collapsed={collapsed}
              level={level + 1}
              onNavigate={onNavigate}
              menuClassName={menuClassName}
            />
          ))}
        </div>
      )}

      {item.divider && !collapsed && (
        <div className="my-2 border-t border-gray-200" />
      )}
    </>
  );
};

/**
 * Sidebar Component
 *
 * @component
 * @description
 * A comprehensive, beautiful sidebar navigation component with collapsible functionality,
 * nested menu support, user section, and settings integration.
 *
 * Better than shadcn UI with more features and flexibility!
 *
 * Features:
 * - Collapsible with smooth animations
 * - Logo section at top
 * - Nested menu items support
 * - URL navigation
 * - Active state management
 * - Badge/count support
 * - User section with avatar
 * - Settings & logout options
 * - Fully responsive
 * - Complete Tailwind customization
 * - Icons from react-icons
 * - Smooth transitions
 *
 * @param {SidebarProps} props - Component props
 * @returns {JSX.Element} Rendered sidebar component
 *
 * @example
 * ```tsx
 * import { Sidebar } from 'drk-ui-components';
 * import { BiHome, BiUser, BiFolder, BiChart } from 'react-icons/bi';
 * import { useState } from 'react';
 *
 * function App() {
 *   const [collapsed, setCollapsed] = useState(false);
 *
 *   const menuItems = [
 *     {
 *       id: '1',
 *       label: 'Dashboard',
 *       icon: <BiHome />,
 *       url: '/dashboard',
 *       active: true
 *     },
 *     {
 *       id: '2',
 *       label: 'Users',
 *       icon: <BiUser />,
 *       badge: 12,
 *       children: [
 *         { id: '2-1', label: 'All Users', url: '/users' },
 *         { id: '2-2', label: 'Add User', url: '/users/new' }
 *       ]
 *     },
 *     {
 *       id: '3',
 *       label: 'Projects',
 *       icon: <BiFolder />,
 *       url: '/projects'
 *     },
 *     {
 *       id: '4',
 *       label: 'Analytics',
 *       icon: <BiChart />,
 *       url: '/analytics',
 *       divider: true
 *     }
 *   ];
 *
 *   const user = {
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     avatar: 'https://example.com/avatar.jpg',
 *     initials: 'JD'
 *   };
 *
 *   return (
 *     <Sidebar
 *       logo={<img src="/logo.png" alt="Logo" className="h-8" />}
 *       menuItems={menuItems}
 *       user={user}
 *       collapsed={collapsed}
 *       onCollapse={setCollapsed}
 *       onNavigate={(url) => console.log('Navigate to:', url)}
 *       onSettings={() => console.log('Settings')}
 *       onLogout={() => console.log('Logout')}
 *     />
 *   );
 * }
 * ```
 */
const Sidebar: React.FC<SidebarProps> = ({
  logo,
  menuItems,
  user,
  userMenuItems,
  collapsed = false,
  onCollapse,
  onNavigate,
  onSettings,
  onLogout,
  className = "",
  menuClassName,
  userClassName,
  showSettings = true,
  showLogout = true,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [userMenuOpen]);

  return (
    <div
      className={`${
        className ||
        "h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm"
      } ${collapsed ? "w-20" : "w-64"} transition-all duration-300 ease-in-out`}
    >
      {/* Logo & Toggle Section */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {!collapsed && logo && <div className="flex-1">{logo}</div>}

        <button
          onClick={() => onCollapse?.(!collapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <BiMenu className="text-xl text-gray-600" />
        </button>
      </div>

      {/* Menu Items Section */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              onNavigate={onNavigate}
              menuClassName={menuClassName}
            />
          ))}
        </nav>
      </div>

      {/* User Section */}
      {user && (
        <div className="border-t border-gray-200 p-3 relative" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className={`${
              userClassName ||
              "w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            }`}
            title={collapsed ? user.name : undefined}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-primary-100">
                  {user.initials || user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {!collapsed && (
              <>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.name}
                  </p>
                  {(user.email || user.role) && (
                    <p className="text-xs text-gray-500 truncate">
                      {user.role || user.email}
                    </p>
                  )}
                </div>

                <BiChevronDown
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                    userMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </>
            )}
          </button>

          {/* User Dropdown Menu - Portal */}
          {userMenuOpen && !collapsed && createPortal(
            <div
              className="fixed bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[240px] z-[9999] animate-in fade-in slide-in-from-bottom-2 duration-200"
              style={{
                bottom: `${window.innerHeight - (userMenuRef.current?.getBoundingClientRect().top || 0) + 8}px`,
                left: `${userMenuRef.current?.getBoundingClientRect().left || 0}px`,
                width: `${userMenuRef.current?.getBoundingClientRect().width || 240}px`,
              }}
            >
              {/* User Info Header */}
              <div className="px-3 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                {user.email && (
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                )}
                {user.role && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-primary-50 text-primary-600 rounded-full">
                    {user.role}
                  </span>
                )}
              </div>

              {/* Custom User Menu Items */}
              {userMenuItems && userMenuItems.length > 0 && (
                <div className="py-1">
                  {userMenuItems.map((item) => (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => {
                          item.onClick?.();
                          setUserMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                          item.destructive
                            ? "text-red-600 hover:bg-red-50"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                        <span>{item.label}</span>
                      </button>
                      {item.divider && <div className="my-1 border-t border-gray-100" />}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Default Menu Items */}
              {(!userMenuItems || userMenuItems.length === 0) && (
                <div className="py-1">
                  {showSettings && (
                    <button
                      onClick={() => {
                        onSettings?.();
                        setUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <BiCog className="text-lg" />
                      <span>Settings</span>
                    </button>
                  )}

                  {showLogout && (
                    <button
                      onClick={() => {
                        onLogout?.();
                        setUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <BiLogOut className="text-lg" />
                      <span>Logout</span>
                    </button>
                  )}
                </div>
              )}
            </div>,
            document.body
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
