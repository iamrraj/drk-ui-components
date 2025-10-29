# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-10-21

### Added

- **Popover** component with trigger/content/close primitives for building contextual menus and inspectors
- **Sheet** drawer with trigger, overlay, header/footer, and accessible title/description helpers
- **Stack** layout utility for quick flex-based spacing and alignment patterns
- **VisuallyHidden** accessibility helper for screen-reader-only content
- Shared `cn` class name helper and exported `ClassValue` type for consumers
- Hooks: `useDisclosure`, `useMediaQuery`, and `usePrefersColorScheme` for common state and media handling

### Enhanced

- **Button** now supports variants, sizes, icon slots, loading states, and full-width mode
- **Input** gains variants, sizes, icon/addon support, and improved error handling
- **Card** adds variants, padding controls, and structured header/footer slots
- **Badge** includes appearance, size, radius, and dot indicator options
- Barrel exports updated to surface new primitives and utility helpers

### Tooling & Docs

- Converted PostCSS config to CommonJS (`postcss.config.cjs`) for compatibility with Rollup/lilconfig
- Updated README with new overlay section, feature highlights, and Popover/Sheet usage examples
- Refreshed `PROPS_REFERENCE.md` with detailed entries for the new and expanded components

## [1.0.7] - 2025-10-20

### Enhanced - Sidebar Component

- **User Menu Dropdown** - Added `userMenuItems` prop for custom user menu at bottom
  - Portal rendering for z-index safety
  - User info header showing name, email, and role badge
  - Custom menu items with icons and onClick handlers
  - Support for `destructive` styling (red color for logout/delete actions)
  - `divider` prop to separate menu sections
  - Click outside to close functionality
  - Smooth fade-in and slide animations
  - TypeScript interfaces: `UserMenuItem` added

### Changed

- Sidebar now supports both default menu items (Settings/Logout) AND custom `userMenuItems`
- If `userMenuItems` is provided, it replaces the default Settings/Logout options
- Enhanced Sidebar example in README with full userMenuItems demonstration

## [1.0.6] - 2025-10-18

### Added - Major Component Expansion! 🎉

This is the BIGGEST update yet - we've added **15 new production-ready components**!

**New Navigation Components:**
- **Sidebar** - Professional collapsible sidebar with nested menus, logo, user profile, and settings
  - Supports unlimited nested menu levels
  - URL navigation and active state management
  - Badge/count indicators
  - User section with avatar, name, email
  - Settings and logout options
  - Smooth collapse animation
- **Pagination** - Page navigation with customizable display
- **Tabs** - Tab navigation with icons and disabled states

**New Form Components:**
- **Checkbox** - Checkbox with label and helper text
- **Radio** - Radio button with label and helper text
- **Textarea** - Multi-line text input with validation
- **Slider** - Range slider for numeric inputs

**New Loading & Feedback:**
- **Spinner** - Loading spinner (4 sizes: sm, md, lg, xl)
- **Skeleton** - Loading placeholder with pulse animation
- **Progress** - Progress bar with percentage display
- **Alert** - Alert/banner (info, success, warning, error variants)

**New Display Components:**
- **Avatar** - User avatar with image, initials, or icon fallback
- **Divider** - Content separator (horizontal/vertical with optional text)

**New Layout Components:**
- **Accordion** - Collapsible content panels with single/multiple open support

**New Data Components:**
- **Table** - Data table with sorting, custom rendering, and row actions

### Enhanced

- **TooltipWrapper** - Added `className` and `tooltipClassName` props for complete customization

### Features

- All components support custom className for full Tailwind CSS customization
- Complete TypeScript definitions for all new components
- Comprehensive JSDoc documentation with examples
- Accessibility features (ARIA attributes, keyboard navigation)
- Responsive and mobile-friendly
- Tree-shakeable imports

### Documentation

- Updated README with all 32+ components
- Added detailed examples for each new component
- Updated component count from 17+ to 32+
- Enhanced feature list and SVG preview

## [1.0.5] - 2025-10-18

### Fixed

- Corrected import statements in README - removed double `@iamrraj/@iamrraj` references
- Fixed CSS import path: `@iamrraj/drk-ui-components/dist/index.css`
- Fixed Toast import path: `@iamrraj/drk-ui-components`

### Added

- Beautiful SVG component preview visualization in README
- Shows Input, Dropdown, Search, Multi-Select, Buttons, Badges, and Toggle components

## [1.0.4] - 2025-10-18

### Enhanced

- **Dropdown Component** - Improved with React Portal rendering for better z-index handling
  - Menu now renders directly under input with no gap
  - Fixed positioning issues in complex layouts
  - User-provided `className` now takes priority over default styles

- **CustomMultiSelect Component** - Enhanced with React Portal rendering
  - Dropdown menu opens directly under trigger input
  - Better scroll and resize handling
  - User-provided `classes` prop now takes priority over defaults
  - Improved cursor styles on menu items

### Documentation

- Updated README with new live demo link
- Added customization examples showing user classes taking priority
- Enhanced examples in `examples/EXAMPLES.md` with custom styling demonstrations
- Added live preview link to examples directory

## [1.0.2] - 2025-10-18

### Fixed

- **Dramatically reduced package size** from 2.24 MB to 45 kB (98% reduction!)
  - Disabled source maps in production builds
  - Added `.npmignore` to exclude unnecessary files
  - Package now downloads and installs much faster

### Changed

- Updated build configuration to exclude source maps from published package
- Optimized published package to include only essential files

## [1.0.1] - 2025-10-18

### Added

- **Toast Component** - Beautiful toast notifications with auto-dismiss and progress bar
- **ToastProvider** - Provider component for managing toasts globally
- **useToast Hook** - Convenient hook for triggering toasts (success, error, warning, info)
- **PROPS_REFERENCE.md** - Comprehensive props documentation for all components
- Toast usage examples in README
- Complete TypeScript types for Toast components

### Features

- Toast notifications with 4 types (success, error, warning, info)
- Configurable position (left, center, right)
- Theme support (light, dark)
- Auto-dismiss with customizable duration
- Progress bar showing time remaining
- Smooth animations
- Multiple toasts stacking support

## [1.0.0] - 2025-10-18

### Added

- Initial release with 14 components:
  - Button
  - Card
  - Input
  - Label
  - Heading
  - Paragraph
  - Span
  - Badge
  - Toggle
  - Dropdown
  - CustomMultiSelect
  - Modal
  - ConfirmationModal
  - Tooltip & TooltipWrapper

### Features

- Full TypeScript support
- Tailwind CSS integration
- Customizable primary color
- Accessibility support (ARIA, keyboard navigation)
- Mobile responsive design
- Tree-shakeable exports
- Comprehensive documentation
