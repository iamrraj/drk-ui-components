# Contributing to DRK UI Components

First off, thank you for considering contributing to DRK UI Components! It's people like you that make this library better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Component Guidelines](#component-guidelines)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible using our bug report template.

**Good bug reports include:**

- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Code samples
- Version information
- Screenshots (if applicable)

### Suggesting Features

Feature suggestions are welcome! Please use our feature request template and include:

- Clear use case description
- Proposed API/usage examples
- Examples from other libraries (if applicable)
- Whether you're willing to implement it

### Contributing Code

1. **Check existing issues** - Look for existing issues or create one to discuss your changes
2. **Fork the repository** - Create your own fork to work on
3. **Create a branch** - Use a descriptive branch name (e.g., `fix/button-hover-state` or `feat/new-dropdown-component`)
4. **Make your changes** - Follow our coding standards
5. **Test thoroughly** - Ensure all tests pass and add new ones if needed
6. **Submit a PR** - Use our pull request template

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/drk-ui-components.git
cd drk-ui-components

# Install dependencies
npm install

# Build the library
npm run build

# Run in development mode (watch mode)
npm run dev
```

### Available Scripts

```bash
npm run build       # Build the library
npm run dev         # Build in watch mode
npm run clean       # Clean dist folder
npm test            # Run tests (when available)
npm run lint        # Lint code (when available)
```

## Project Structure

```
drk-ui-components/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   └── ...
│   ├── types/
│   ├── utils/
│   └── index.ts
├── dist/                 # Built files
├── examples/            # Example usage
├── .github/             # GitHub templates
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## Development Workflow

### Creating a New Component

1. **Create component directory** in `src/components/`
2. **Create component file** (e.g., `MyComponent.tsx`)
3. **Define types** for props with proper TypeScript interfaces
4. **Implement component** following our component guidelines
5. **Export component** in `src/components/MyComponent/index.ts`
6. **Add to main export** in `src/index.ts`
7. **Add documentation** with usage examples
8. **Add tests** (if test setup exists)

### Example Component Structure

```tsx
// src/components/Button/Button.tsx
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading,
      icon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // Implementation
    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="icon">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

## Coding Standards

### TypeScript

- Use TypeScript for all components
- Properly type all props and return values
- Extend native HTML element props when appropriate
- Export all interfaces and types
- Use `React.forwardRef` for components that accept refs

### React Best Practices

- Use functional components with hooks
- Properly handle refs with `forwardRef`
- Set `displayName` for all components
- Avoid inline styles (use Tailwind classes)
- Memoize expensive computations with `useMemo`
- Use `useCallback` for event handlers when necessary

### Styling

- Use Tailwind CSS utility classes
- Follow consistent naming conventions
- Support className prop for customization
- Ensure responsive design
- Support dark mode (if applicable)

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Support screen readers
- Maintain proper focus management
- Test with accessibility tools

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Build process, dependencies, etc.

### Examples

```bash
feat(button): add loading state
fix(input): resolve focus issue on Safari
docs(readme): update installation instructions
style(select): improve dropdown positioning
refactor(modal): simplify close logic
perf(tabs): optimize re-renders
```

### Commit Message Guidelines

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- First line should be 50 characters or less
- Reference issues and PRs in the footer
- Include breaking changes in the footer

## Pull Request Process

1. **Update documentation** - Ensure README and other docs are updated
2. **Update CHANGELOG.md** - Add entry for your changes
3. **Follow the PR template** - Fill out all relevant sections
4. **Ensure CI passes** - All checks must pass
5. **Request review** - Tag relevant maintainers
6. **Address feedback** - Make requested changes promptly
7. **Keep PR focused** - One feature/fix per PR
8. **Squash commits** (if requested) - Maintain clean history

### PR Title Format

Follow the same format as commit messages:

```
feat(component): add new feature
fix(component): resolve issue
```

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No new warnings
- [ ] Accessibility checked
- [ ] CHANGELOG.md updated
- [ ] TypeScript types updated

## Component Guidelines

### Props Design

- **Keep props simple** - Avoid over-complication
- **Use semantic names** - Clear, descriptive prop names
- **Provide defaults** - Sensible default values
- **Support customization** - Accept className prop
- **Extend native props** - Extend appropriate HTML element props
- **Document all props** - JSDoc comments for each prop

### Variants & Sizes

- Use consistent variant names across components
- Common variants: `primary`, `secondary`, `outline`, `ghost`
- Common sizes: `sm`, `md`, `lg`
- Use TypeScript unions for prop types

### State Management

- Use controlled components when possible
- Support both controlled and uncontrolled modes
- Provide callback props for state changes (e.g., `onChange`, `onToggle`)

### Performance

- Use `React.memo` only when necessary
- Avoid unnecessary re-renders
- Keep bundle size small
- Tree-shakeable exports

## Testing Guidelines

### What to Test

- Component renders correctly
- Props work as expected
- Event handlers are called
- Accessibility features work
- Edge cases are handled
- Error states display properly

### Testing Best Practices

- Test user behavior, not implementation
- Use meaningful test descriptions
- Cover happy path and edge cases
- Test accessibility with testing-library
- Mock external dependencies

## Documentation

### Component Documentation

Each component should include:

- Brief description
- Installation instructions (if specific)
- Basic usage example
- Props table with descriptions
- All variants demonstrated
- Accessibility notes
- Common patterns/recipes

### Code Comments

- Use JSDoc for functions and components
- Explain "why" not "what"
- Comment complex logic
- Keep comments up to date

## Questions?

- Open a [Discussion](https://github.com/iamrraj/drk-ui-components/discussions)
- Create an [Issue](https://github.com/iamrraj/drk-ui-components/issues)
- Reach out to maintainers

## Recognition

Contributors will be recognized in:

- CHANGELOG.md for each release
- GitHub contributors page
- README.md (for significant contributions)

Thank you for contributing to DRK UI Components! Your efforts help make this library better for everyone.
