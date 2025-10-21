# DRK UI Components

A comprehensive React component library built with TypeScript and Tailwind CSS. Provides accessible, customizable, and production-ready UI components.

[![npm version](https://img.shields.io/npm/v/drk-ui-components.svg)](https://www.npmjs.com/package/drk-ui-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🎮 Live Demo

**[View Interactive Demo →](https://drk-ui-components.vercel.app/)**

Try out all components with live examples, dark/light theme toggle, and copy-ready code snippets.

## 📚 Documentation

**[Complete Documentation →](https://drk-ui-components.vercel.app/)**

Comprehensive documentation with interactive examples, API reference, and usage guides for all components.

## Features

✨ **32+ Production-Ready Components** - Complete UI toolkit for modern web applications

🎨 **Tailwind CSS Support** - Full customization with utility classes

🔧 **TypeScript First** - Complete type definitions for better DX

♿ **Accessible** - ARIA compliant and keyboard navigable

🎯 **Tree-Shakeable** - Import only what you need

📱 **Responsive** - Mobile-first design approach

🎭 **Customizable Primary Color** - Easy theme customization

🔔 **Toast Notifications** - Beautiful notification system with provider pattern

🧭 **Advanced Sidebar** - Collapsible navigation with nested menus

⚡ **Loading States** - Spinners, skeletons, and progress bars

🎪 **Form Components** - Checkboxes, radios, and more

🚀 **Lightweight** - Only ~50 kB package size for fast installations

## Installation

```bash
npm install @iamrraj/drk-ui-components react react-dom
```

or

```bash
yarn add @iamrraj/drk-ui-components react react-dom
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
    "@tailwindcss/postcss": {},
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
    "./node_modules/@iamrraj/@iamrraj/drk-ui-components/**/*.{js,jsx}", // Required!
  ],
};
```

### 3. Customize Primary Color (Optional)

Override the default primary color in your Tailwind configuration:

```javascript
import drkConfig from "@iamrraj/drk-ui-components/tailwind.config.js";

export default {
  ...drkConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@iamrraj/drk-ui-components/**/*.{js,ts,jsx,tsx}",
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

### Form Components

- **Toggle** - On/off switch component
- **Textarea** - Multi-line text input with validation
- **Slider** - Range slider for numeric inputs
- **Checkbox** - Checkbox input with label and helper text
- **Radio** - Radio button with label and helper text
- **Dropdown** - Single-select dropdown with search
- **CustomMultiSelect** - Multi-select dropdown with filtering

### Navigation Components

- **Sidebar** - Collapsible sidebar with nested menu, logo, user section, and settings
- **Pagination** - Page navigation with customizable display
- **Tabs** - Tab navigation with icons and disabled states

### Modal Components

- **Modal** - Dialog with focus trapping
- **ConfirmationModal** - Confirmation dialog for actions

### Tooltip Components

- **Tooltip** - Info icon with hover tooltip
- **TooltipWrapper** - Wrap any element with tooltip (now with className support)

### Toast Components

- **Toast** - Toast notification with auto-dismiss
- **ToastProvider** - Provider for toast notifications
- **useToast** - Hook for triggering toasts

### Loading & Feedback Components

- **Spinner** - Loading spinner with multiple sizes
- **Skeleton** - Loading placeholder with pulse animation
- **Progress** - Progress bar with percentage
- **Alert** - Alert/banner with variants (info, success, warning, error)

### Display Components

- **Avatar** - User avatar with image, initials, or icon fallback
- **Divider** - Content separator (horizontal/vertical)

### Layout Components

- **Accordion** - Collapsible content panels with single/multiple open

### Data Display Components

- **Table** - Data table with sorting and custom rendering

## Complete Props Reference

For detailed prop information for all components, see [PROPS_REFERENCE.md](./PROPS_REFERENCE.md)

## Usage Examples

### Button

```tsx
import { Button } from "@iamrraj/drk-ui-components";

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
import { Input } from "@iamrraj/drk-ui-components";
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
import { Dropdown } from "@iamrraj/drk-ui-components";
import type { DropdownOption } from "@iamrraj/drk-ui-components";
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
      className="bg-gray-50" // Custom background - user classes take priority
    />
  );
}
```

**Customization Note:** The `className` prop allows full customization. User-provided classes take priority over defaults, so you can override any styling including background colors, borders, padding, etc.

### CustomMultiSelect

```tsx
import { CustomMultiSelect } from "@iamrraj/drk-ui-components";
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
      classes="bg-blue-50 hover:bg-blue-100" // Custom styling - user classes take priority
    />
  );
}
```

**Customization Note:** The `classes` prop allows full customization. User-provided classes take priority over defaults, enabling complete control over the component's appearance.

### Modal

```tsx
import { Modal, Button, Input } from "@iamrraj/drk-ui-components";
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
import { ConfirmationModal, Button } from "@iamrraj/drk-ui-components";
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
import { Toggle } from "@iamrraj/drk-ui-components";
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
import { Badge } from "@iamrraj/drk-ui-components";

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
import { TooltipWrapper, Button } from "@iamrraj/drk-ui-components";

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
} from "@iamrraj/drk-ui-components";
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

### Sidebar

```tsx
import { Sidebar } from "@iamrraj/drk-ui-components";
import { BiHome, BiUser, BiFolder, BiChart, BiSettings, BiCog, BiLogOut } from "react-icons/bi";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePath, setActivePath] = useState("/dashboard");

  const menuItems = [
    {
      id: "1",
      label: "Dashboard",
      icon: <BiHome />,
      url: "/dashboard",
      active: activePath === "/dashboard",
    },
    {
      id: "2",
      label: "Users",
      icon: <BiUser />,
      badge: 12,
      children: [
        { id: "2-1", label: "All Users", url: "/users" },
        { id: "2-2", label: "Add User", url: "/users/new" },
        { id: "2-3", label: "User Roles", url: "/users/roles" },
      ],
    },
    {
      id: "3",
      label: "Projects",
      icon: <BiFolder />,
      url: "/projects",
      badge: "NEW",
    },
    {
      id: "4",
      label: "Analytics",
      icon: <BiChart />,
      url: "/analytics",
      divider: true,
    },
    {
      id: "5",
      label: "Settings",
      icon: <BiSettings />,
      url: "/settings",
    },
  ];

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://example.com/avatar.jpg",
    initials: "JD",
    role: "Admin",
  };

  // Custom user menu items (v1.0.7+)
  const userMenuItems = [
    {
      id: "profile",
      label: "View Profile",
      icon: <BiUser />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <BiCog />,
      onClick: () => console.log("Settings clicked"),
      divider: true,
    },
    {
      id: "logout",
      label: "Logout",
      icon: <BiLogOut />,
      onClick: () => console.log("Logout clicked"),
      destructive: true, // Red styling for destructive actions
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar
        logo={<img src="/logo.png" alt="Logo" className="h-8" />}
        menuItems={menuItems}
        user={user}
        userMenuItems={userMenuItems} // Custom user dropdown menu
        collapsed={collapsed}
        onCollapse={setCollapsed}
        onNavigate={(url) => {
          console.log("Navigate to:", url);
          setActivePath(url);
        }}
      />
      <main className="flex-1 p-8">{/* Your content */}</main>
    </div>
  );
}
```

### Spinner

```tsx
import { Spinner } from "@iamrraj/drk-ui-components";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner size="lg" />
    </div>
  );
}

// Inline loading
function SubmitButton() {
  const [loading, setLoading] = useState(false);

  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
      {loading && <Spinner size="sm" color="border-white" />}
      {loading ? "Saving..." : "Save"}
    </button>
  );
}
```

### Skeleton

```tsx
import { Skeleton } from "@iamrraj/drk-ui-components";

function UserCardLoading() {
  return (
    <div className="p-4 border rounded-lg">
      <Skeleton circle width="4rem" height="4rem" />
      <Skeleton width="200px" className="mt-4" />
      <Skeleton count={3} className="mt-2" />
    </div>
  );
}
```

### Avatar

```tsx
import { Avatar } from "@iamrraj/drk-ui-components";

function UserList() {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src="https://example.com/avatar.jpg"
        alt="John Doe"
        size="lg"
      />
      <Avatar initials="JD" size="md" className="bg-blue-500" />
      <Avatar initials="AB" size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500" />
    </div>
  );
}
```

### Progress

```tsx
import { Progress } from "@iamrraj/drk-ui-components";
import { useState, useEffect } from "react";

function UploadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md">
      <Progress value={progress} showLabel size="lg" />
    </div>
  );
}
```

### Alert

```tsx
import { Alert } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function Notifications() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="space-y-4">
      <Alert variant="success" title="Success!">
        Your profile has been updated successfully.
      </Alert>

      <Alert variant="error" dismissible onDismiss={() => setShowAlert(false)}>
        An error occurred while processing your request.
      </Alert>

      <Alert variant="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>

      <Alert variant="info">
        New features are now available. Check them out!
      </Alert>
    </div>
  );
}
```

### Checkbox

```tsx
import { Checkbox } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="space-y-4">
      <Checkbox
        checked={notifications}
        onChange={setNotifications}
        label="Enable notifications"
        helperText="Receive email notifications for updates"
      />
      <Checkbox
        checked={newsletter}
        onChange={setNewsletter}
        label="Subscribe to newsletter"
      />
    </div>
  );
}
```

### Radio

```tsx
import { Radio } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function PaymentMethod() {
  const [method, setMethod] = useState("card");

  return (
    <div className="space-y-3">
      <Radio
        name="payment"
        value="card"
        checked={method === "card"}
        onChange={setMethod}
        label="Credit Card"
        helperText="Pay with Visa, MasterCard, or AmEx"
      />
      <Radio
        name="payment"
        value="paypal"
        checked={method === "paypal"}
        onChange={setMethod}
        label="PayPal"
      />
      <Radio
        name="payment"
        value="bank"
        checked={method === "bank"}
        onChange={setMethod}
        label="Bank Transfer"
      />
    </div>
  );
}
```

### Divider

```tsx
import { Divider } from "@iamrraj/drk-ui-components";

function Content() {
  return (
    <div>
      <section>Top Content</section>
      <Divider />
      <section>Bottom Content</section>

      {/* Divider with text */}
      <Divider text="OR" />

      {/* Vertical divider */}
      <div className="flex items-center gap-4">
        <button>Left</button>
        <Divider orientation="vertical" className="h-8" />
        <button>Right</button>
      </div>
    </div>
  );
}
```

### Textarea

```tsx
import { Textarea } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <Textarea
      label="Your Feedback"
      placeholder="Tell us what you think..."
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      rows={5}
      helperText="Maximum 500 characters"
      required
    />
  );
}
```

### Slider

```tsx
import { Slider } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function VolumeControl() {
  const [volume, setVolume] = useState(50);

  return (
    <div className="w-full max-w-md">
      <Slider
        label="Volume"
        value={volume}
        onChange={setVolume}
        min={0}
        max={100}
        step={5}
        showValue
      />
    </div>
  );
}
```

### Accordion

```tsx
import { Accordion } from "@iamrraj/drk-ui-components";

function FAQSection() {
  const faqItems = [
    {
      id: "1",
      title: "What is DRK UI Components?",
      content:
        "A comprehensive React component library with 32+ production-ready components built with TypeScript and Tailwind CSS.",
    },
    {
      id: "2",
      title: "How do I install it?",
      content: "Run: npm install @iamrraj/drk-ui-components",
    },
    {
      id: "3",
      title: "Is it free to use?",
      content: "Yes! It's completely free and open-source under the MIT license.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion items={faqItems} />
    </div>
  );
}
```

### Tabs

```tsx
import { Tabs } from "@iamrraj/drk-ui-components";
import { BiHome, BiUser, BiChart } from "react-icons/bi";
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <BiHome /> },
    { id: "users", label: "Users", icon: <BiUser /> },
    { id: "analytics", label: "Analytics", icon: <BiChart /> },
    { id: "disabled", label: "Disabled", disabled: true },
  ];

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="p-6">
        {activeTab === "overview" && <div>Overview content</div>}
        {activeTab === "users" && <div>Users content</div>}
        {activeTab === "analytics" && <div>Analytics content</div>}
      </div>
    </div>
  );
}
```

### Pagination

```tsx
import { Pagination } from "@iamrraj/drk-ui-components";
import { useState } from "react";

function DataList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <div>
      {/* Your data content */}
      <div className="my-8">
        {/* Data items for page {currentPage} */}
      </div>

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
```

### Table

```tsx
import { Table, Badge } from "@iamrraj/drk-ui-components";
import type { TableColumn } from "@iamrraj/drk-ui-components";

function UserTable() {
  const users = [
    { id: 1, name: "Alice Johnson", role: "Developer", status: "Active", projects: 12 },
    { id: 2, name: "Bob Smith", role: "Designer", status: "Active", projects: 8 },
    { id: 3, name: "Carol White", role: "Manager", status: "Away", projects: 15 },
  ];

  const columns: TableColumn<typeof users[0]>[] = [
    {
      key: "name",
      header: "Name",
      sortable: true,
    },
    {
      key: "role",
      header: "Role",
      sortable: true,
    },
    {
      key: "status",
      header: "Status",
      sortable: false,
      render: (user) => (
        <Badge variant={user.status === "Active" ? "green" : "yellow"}>
          {user.status}
        </Badge>
      ),
    },
    {
      key: "projects",
      header: "Projects",
      sortable: true,
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border">
      <Table data={users} columns={columns} striped hoverable />
    </div>
  );
}
```

## TypeScript Support

All components are fully typed. Import types using the `import type` syntax:

```tsx
import type {
  ButtonProps,
  InputProps,
  DropdownOption,
} from "@iamrraj/drk-ui-components";
```

Or import components and types separately:

```tsx
import { Button, Input, Dropdown } from "@iamrraj/drk-ui-components";
import type {
  ButtonProps,
  InputProps,
  DropdownOption,
} from "@iamrraj/drk-ui-components";
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

### v1.0.7

- **Enhanced Sidebar with User Menu Dropdown** - Added `userMenuItems` prop
- User dropdown at bottom shows profile info (name, email, role)
- Custom menu items with icons and destructive styling support
- Portal rendering for user dropdown menu
- Click outside to close functionality
- Smooth animations and transitions

### v1.0.6

- **15 New Components Added!**
- **Sidebar** - Collapsible navigation with nested menus, badges, and user section
- **Spinner** - Loading spinner with 4 sizes (sm, md, lg, xl)
- **Skeleton** - Loading placeholder with pulse animation
- **Avatar** - User avatar with image, initials, and icon fallback
- **Progress** - Progress bar with percentage display
- **Alert** - Alert/banner with 4 variants (info, success, warning, error)
- **Checkbox** - Checkbox input with label and helper text
- **Radio** - Radio button with label and helper text
- **Textarea** - Multi-line text input with validation
- **Slider** - Range slider for numeric inputs
- **Accordion** - Collapsible content panels
- **Tabs** - Tab navigation with icons and disabled states
- **Pagination** - Page navigation with ellipsis
- **Table** - Sortable data table with custom rendering
- **Divider** - Content separator (horizontal/vertical)
- Now 32+ production-ready components!

### v1.0.5

- Fixed import statements in README (removed double `@iamrraj/@iamrraj`)
- Added beautiful SVG component preview visualization
- Corrected CSS and Toast import paths

### v1.0.4

- **Enhanced Dropdown & CustomMultiSelect** with React Portal rendering
- Menu positioning improved - opens directly under input
- User classes now take priority over defaults for better customization
- Updated documentation with custom styling examples
- Added new live demo link

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

For issues and questions, please open an issue on [GitHub](https://github.com/your-username/@iamrraj/drk-ui-components/issues).
