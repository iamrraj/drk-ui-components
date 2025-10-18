# DRK UI Components

A comprehensive React component library built with TypeScript and Tailwind CSS. Provides accessible, customizable, and production-ready UI components.

[![npm version](https://img.shields.io/npm/v/drk-ui-components.svg)](https://www.npmjs.com/package/drk-ui-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

✨ **17+ Production-Ready Components** - All the essentials for building modern web applications

🎨 **Tailwind CSS Support** - Full customization with utility classes

🔧 **TypeScript First** - Complete type definitions for better DX

♿ **Accessible** - ARIA compliant and keyboard navigable

🎯 **Tree-Shakeable** - Import only what you need

📱 **Responsive** - Mobile-first design approach

🎭 **Customizable Primary Color** - Easy theme customization

🔔 **Toast Notifications** - Beautiful notification system with provider pattern

🚀 **Lightweight** - Only 45 kB package size (191 kB unpacked) for fast installations

## Installation

```bash
npm install drk-ui-components react react-dom
```

or

```bash
yarn add drk-ui-components react react-dom
```

### Peer Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### Additional Dependencies (Included)

The library uses these icon libraries (already included):

- `react-icons` - For general icons
- `lucide-react` - For the Info icon

## Setup

### 1. Import Component Styles

Import the component library CSS in your main entry file (e.g., `main.tsx`):

```tsx
import "@iamrraj/drk-ui-components/dist/index.css";
import "./index.css"; // Your app's CSS
```

### 2. Configure Tailwind CSS v4 (Required)

**IMPORTANT:** This library requires Tailwind CSS v4 with the new `@import` syntax.

Install Tailwind CSS v4 and the PostCSS plugin:

```bash
npm install -D tailwindcss@4 @tailwindcss/postcss
```

Update your `postcss.config.js`:

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

Update your main CSS file (e.g., `src/index.css`) to use Tailwind v4 syntax:

```css
@import "tailwindcss";

@theme {
  /* Optional: customize the primary color */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
}

/* Your custom styles */
```

Configure Tailwind to scan your source files in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@iamrraj/drk-ui-components/**/*.{js,jsx}", // Required!
  ],
};
```

### 3. Customize Primary Color (Optional)

Override the default primary color in your Tailwind configuration:

```javascript
import drkConfig from "drk-ui-components/tailwind.config.js";

export default {
  ...drkConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/drk-ui-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...drkConfig.theme.extend,
      colors: {
        ...drkConfig.theme.extend.colors,
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Your custom primary color
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
    },
  },
};
```

## Components

### Basic Components

- **Button** - Customizable button component
- **Card** - Container for grouped content
- **Input** - Text input with label and validation
- **Label** - Form label with helper text support
- **Heading** - Semantic heading (h1-h6)
- **Paragraph** - Text paragraph component
- **Span** - Inline text component
- **Badge** - Status indicators and labels

### Interactive Components

- **Toggle** - On/off switch component
- **Dropdown** - Single-select dropdown with search
- **CustomMultiSelect** - Multi-select dropdown with filtering

### Modal Components

- **Modal** - Dialog with focus trapping
- **ConfirmationModal** - Confirmation dialog for actions

### Tooltip Components

- **Tooltip** - Info icon with hover tooltip
- **TooltipWrapper** - Wrap any element with tooltip

### Toast Components

- **Toast** - Toast notification with auto-dismiss
- **ToastProvider** - Provider for toast notifications
- **useToast** - Hook for triggering toasts

## Complete Props Reference

For detailed prop information for all components, see [PROPS_REFERENCE.md](./PROPS_REFERENCE.md)

## Usage Examples

### Button

```tsx
import { Button } from "drk-ui-components";

function App() {
  return (
    <>
      <Button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
        Click Me
      </Button>

      <Button
        onClick={() => alert("Clicked!")}
        className="bg-red-500 text-white px-4 py-2 rounded"
        disabled
      >
        Disabled
      </Button>
    </>
  );
}
```

### Input

```tsx
import { Input } from "drk-ui-components";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <Input
      label="Email Address"
      type="email"
      placeholder="you@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      helpText="We'll never share your email"
    />
  );
}
```

### Dropdown

```tsx
import { Dropdown } from "drk-ui-components";
import type { DropdownOption } from "drk-ui-components";
import { useState } from "react";

function CountrySelector() {
  const countries: DropdownOption[] = [
    { id: "us", label: "United States" },
    { id: "uk", label: "United Kingdom" },
    { id: "ca", label: "Canada" },
  ];

  const [selected, setSelected] = useState<DropdownOption | null>(null);

  return (
    <Dropdown
      options={countries}
      selectedOption={selected}
      onSelect={setSelected}
      placeholder="Select a country"
      className="w-full"
    />
  );
}
```

### CustomMultiSelect

```tsx
import { CustomMultiSelect } from "drk-ui-components";
import { useState } from "react";

function FrameworkSelector() {
  const frameworks = [
    { id: "1", name: "React" },
    { id: "2", name: "Vue" },
    { id: "3", name: "Angular" },
    { id: "4", name: "Svelte" },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <CustomMultiSelect
      options={frameworks}
      selectedItems={selected}
      onSelect={setSelected}
      label="Select Frameworks"
      placeholder="Choose frameworks"
      multiple={true}
    />
  );
}
```

### Modal

```tsx
import { Modal, Button, Input } from "drk-ui-components";
import { useState } from "react";

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>

      {isOpen && (
        <Modal className="max-w-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <Input label="Name" placeholder="Enter your name" className="mb-4" />
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            className="mb-4"
          />
          <div className="flex justify-end gap-2 mt-6">
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Cancel
            </Button>
            <Button className="bg-primary-500 text-white px-4 py-2 rounded">
              Save
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
```

### ConfirmationModal

```tsx
import { ConfirmationModal, Button } from "drk-ui-components";
import { useState } from "react";

function DeleteButton() {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log("Item deleted");
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Item
      </Button>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Delete Item?"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </>
  );
}
```

### Toggle

```tsx
import { Toggle } from "drk-ui-components";
import { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Toggle
      checked={darkMode}
      onChange={setDarkMode}
      label="Dark Mode"
      helper_text="Enable dark theme for better visibility"
    />
  );
}
```

### Badge

```tsx
import { Badge } from "drk-ui-components";

function StatusIndicator() {
  return (
    <div className="flex gap-2">
      <Badge variant="green">Active</Badge>
      <Badge variant="red">Error</Badge>
      <Badge variant="yellow">Warning</Badge>
      <Badge variant="blue">Info</Badge>
      <Badge variant="gray">Inactive</Badge>
    </div>
  );
}
```

### TooltipWrapper

```tsx
import { TooltipWrapper, Button } from "drk-ui-components";

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <TooltipWrapper tooltipContent="Save your changes">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </Button>
      </TooltipWrapper>

      <TooltipWrapper tooltipContent="Delete permanently" placement="bottom">
        <Button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </Button>
      </TooltipWrapper>
    </div>
  );
}
```

### Complete Form Example

```tsx
import {
  Input,
  Dropdown,
  CustomMultiSelect,
  Toggle,
  Button,
  Card,
  Heading,
} from "drk-ui-components";
import { useState } from "react";

function CompleteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: null,
    frameworks: [],
    notifications: true,
  });

  const countries = [
    { id: "us", label: "United States" },
    { id: "uk", label: "United Kingdom" },
  ];

  const frameworks = [
    { id: "1", name: "React" },
    { id: "2", name: "Vue" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <Card className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Heading as="h2" className="text-2xl font-bold mb-6">
        Registration Form
      </Heading>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Dropdown
          options={countries}
          selectedOption={formData.country}
          onSelect={(country) => setFormData({ ...formData, country })}
          placeholder="Select your country"
        />

        <CustomMultiSelect
          options={frameworks}
          selectedItems={formData.frameworks}
          onSelect={(frameworks) => setFormData({ ...formData, frameworks })}
          label="Frameworks"
          placeholder="Select frameworks you know"
        />

        <Toggle
          checked={formData.notifications}
          onChange={(notifications) =>
            setFormData({ ...formData, notifications })
          }
          label="Email Notifications"
        />

        <Button
          type="submit"
          className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}
```

### Toast Notifications

```tsx
import { ToastProvider, useToast } from "@iamrraj/drk-ui-components";

// Wrap your app with ToastProvider
function App() {
  return (
    <ToastProvider position="right" theme="dark">
      <YourApp />
    </ToastProvider>
  );
}

// Use the useToast hook in any component
function MyComponent() {
  const toast = useToast();

  const handleSuccess = () => {
    toast.success("Success!", "Your changes have been saved");
  };

  const handleError = () => {
    toast.error("Error!", "Something went wrong", 5000);
  };

  const handleWarning = () => {
    toast.warning("Warning!", "Please check your input");
  };

  const handleInfo = () => {
    toast.info("Info", "New updates available");
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleWarning}>Show Warning</button>
      <button onClick={handleInfo}>Show Info</button>
    </div>
  );
}
```

## TypeScript Support

All components are fully typed. Import types using the `import type` syntax:

```tsx
import type { ButtonProps, InputProps, DropdownOption } from "drk-ui-components";
```

Or import components and types separately:

```tsx
import { Button, Input, Dropdown } from "drk-ui-components";
import type { ButtonProps, InputProps, DropdownOption } from "drk-ui-components";
```

## Styling

### Using Tailwind Classes

All components accept a `className` prop for custom styling:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
  Fancy Button
</Button>
```

### Component-Specific Styling

- **Button**: No default styles, fully customizable
- **Card**: Minimal styling, acts as a container
- **Input**: Pre-styled with focus states
- **Badge**: 7 color variants (gray, red, green, blue, yellow, purple, primary)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © DRK

## Changelog

### v1.0.2

- **Dramatically reduced package size** from 2.24 MB to 45 kB (98% reduction!)
- Disabled source maps in production builds
- Added `.npmignore` to exclude unnecessary files
- Optimized package for faster downloads and installations

### v1.0.1

- Added Toast Component and ToastProvider
- Added useToast hook for notifications
- Complete TypeScript types for Toast components

### v1.0.0

- Initial release
- 17+ components
- Full TypeScript support
- Tailwind CSS integration
- Customizable primary color

## Support

For issues and questions, please open an issue on [GitHub](https://github.com/your-username/drk-ui-components/issues).
