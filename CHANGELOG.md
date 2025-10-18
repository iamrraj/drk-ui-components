# Changelog

All notable changes to this project will be documented in this file.

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
