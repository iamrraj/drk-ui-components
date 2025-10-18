# DRK UI Components - Complete Examples

This directory contains comprehensive examples demonstrating all components in the DRK UI Components library.

## Running the Examples

### Option 1: Copy to Your Project

1. Copy `App.tsx` to your React project
2. Make sure you have installed `drk-ui-components`
3. Import the CSS: `import 'drk-ui-components/dist/index.css'`
4. Run your dev server

### Option 2: Create a New Vite Project

```bash
# Create a new Vite React TypeScript project
npm create vite@latest drk-demo -- --template react-ts
cd drk-demo

# Install dependencies
npm install
npm install drk-ui-components

# Copy the example
cp path/to/examples/App.tsx src/App.tsx

# Update src/main.tsx to include:
import 'drk-ui-components/dist/index.css'

# Run the dev server
npm run dev
```

## Individual Component Examples

### 1. Button Examples

```tsx
import { Button } from 'drk-ui-components';

// Primary button
<Button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
  Primary Action
</Button>

// Secondary button
<Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
  Secondary Action
</Button>

// Danger button
<Button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
  Delete
</Button>

// Disabled button
<Button disabled className="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed">
  Disabled
</Button>

// Full width button
<Button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
  Full Width Button
</Button>

// Icon button (with react-icons)
import { FaPlus } from 'react-icons/fa';

<Button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
  <FaPlus />
</Button>
```

### 2. Input Examples

```tsx
import { Input } from 'drk-ui-components';
import { useState } from 'react';

function InputExamples() {
  const [values, setValues] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    date: '',
  });

  return (
    <>
      {/* Text input */}
      <Input
        label="Username"
        placeholder="Enter username"
        value={values.text}
        onChange={(e) => setValues({ ...values, text: e.target.value })}
      />

      {/* Email with validation */}
      <Input
        label="Email"
        type="email"
        required
        placeholder="you@example.com"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        helpText="We'll never share your email with anyone"
      />

      {/* Password input */}
      <Input
        label="Password"
        type="password"
        required
        minLength={8}
        placeholder="••••••••"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        helpText="Minimum 8 characters"
      />

      {/* Number input */}
      <Input
        label="Age"
        type="number"
        min="0"
        max="120"
        placeholder="25"
        value={values.number}
        onChange={(e) => setValues({ ...values, number: e.target.value })}
      />

      {/* Date input */}
      <Input
        label="Birth Date"
        type="date"
        value={values.date}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
      />

      {/* Disabled input */}
      <Input
        label="Disabled Field"
        value="Cannot edit this"
        disabled
      />
    </>
  );
}
```

### 3. Dropdown Examples

```tsx
import { Dropdown } from 'drk-ui-components';
import { useState } from 'react';

function DropdownExamples() {
  const [selected, setSelected] = useState(null);

  // Countries dropdown
  const countries = [
    { id: 1, label: 'United States' },
    { id: 2, label: 'United Kingdom' },
    { id: 3, label: 'Canada' },
    { id: 4, label: 'Australia' },
  ];

  return (
    <>
      {/* Basic dropdown */}
      <Dropdown
        options={countries}
        selectedOption={selected}
        onSelect={setSelected}
        placeholder="Select a country"
      />

      {/* Dropdown with clear button */}
      <Dropdown
        options={countries}
        selectedOption={selected}
        onSelect={setSelected}
        onClear={() => setSelected(null)}
        placeholder="Choose country"
      />

      {/* Disabled dropdown */}
      <Dropdown
        options={countries}
        selectedOption={selected}
        onSelect={setSelected}
        disabled
        placeholder="Disabled dropdown"
      />

      {/* Full width dropdown */}
      <Dropdown
        options={countries}
        selectedOption={selected}
        onSelect={setSelected}
        className="w-full"
        placeholder="Full width"
      />
    </>
  );
}
```

### 4. CustomMultiSelect Examples

```tsx
import { CustomMultiSelect } from 'drk-ui-components';
import { useState } from 'react';

function MultiSelectExamples() {
  const [selected, setSelected] = useState<string[]>([]);
  const [singleSelected, setSingleSelected] = useState<string[]>([]);

  const options = [
    { id: '1', name: 'React' },
    { id: '2', name: 'Vue' },
    { id: '3', name: 'Angular' },
    { id: '4', name: 'Svelte' },
  ];

  return (
    <>
      {/* Multiple selection */}
      <CustomMultiSelect
        options={options}
        selectedItems={selected}
        onSelect={setSelected}
        label="Select Frameworks (Multiple)"
        placeholder="Choose multiple"
        multiple={true}
      />

      {/* Single selection */}
      <CustomMultiSelect
        options={options}
        selectedItems={singleSelected}
        onSelect={setSingleSelected}
        label="Primary Framework (Single)"
        placeholder="Choose one"
        multiple={false}
      />

      {/* With custom background */}
      <CustomMultiSelect
        options={options}
        selectedItems={selected}
        onSelect={setSelected}
        label="Custom Styled"
        classes="bg-gray-50"
      />
    </>
  );
}
```

### 5. Modal Examples

```tsx
import { Modal, Button, Input } from 'drk-ui-components';
import { useState } from 'react';

function ModalExamples() {
  const [showSimple, setShowSimple] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLarge, setShowLarge] = useState(false);

  return (
    <>
      {/* Simple modal */}
      <Button onClick={() => setShowSimple(true)}>
        Open Simple Modal
      </Button>

      {showSimple && (
        <Modal className="max-w-md p-6">
          <h2 className="text-2xl font-bold mb-4">Simple Modal</h2>
          <p className="mb-4">This is a basic modal example.</p>
          <Button
            onClick={() => setShowSimple(false)}
            className="bg-primary-500 text-white px-4 py-2 rounded"
          >
            Close
          </Button>
        </Modal>
      )}

      {/* Form modal */}
      <Button onClick={() => setShowForm(true)}>
        Open Form Modal
      </Button>

      {showForm && (
        <Modal className="max-w-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
          <div className="space-y-4 mb-6">
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setShowForm(false)}
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

      {/* Large modal with scroll */}
      <Button onClick={() => setShowLarge(true)}>
        Open Large Modal
      </Button>

      {showLarge && (
        <Modal className="max-w-4xl max-h-[80vh] p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Large Scrollable Modal</h2>
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>Content section {i + 1}</p>
            ))}
          </div>
          <Button
            onClick={() => setShowLarge(false)}
            className="mt-6 bg-primary-500 text-white px-4 py-2 rounded"
          >
            Close
          </Button>
        </Modal>
      )}
    </>
  );
}
```

### 6. ConfirmationModal Examples

```tsx
import { ConfirmationModal, Button } from 'drk-ui-components';
import { useState } from 'react';

function ConfirmationExamples() {
  const [showDelete, setShowDelete] = useState(false);
  const [showSave, setShowSave] = useState(false);

  const handleDelete = () => {
    console.log('Deleted!');
    setShowDelete(false);
  };

  const handleSave = () => {
    console.log('Saved!');
    setShowSave(false);
  };

  return (
    <>
      {/* Delete confirmation */}
      <Button onClick={() => setShowDelete(true)}>Delete Item</Button>

      <ConfirmationModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
        title="Delete Item?"
        message="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Yes, delete it"
        cancelText="Cancel"
      />

      {/* Save confirmation */}
      <Button onClick={() => setShowSave(true)}>Save Changes</Button>

      <ConfirmationModal
        isOpen={showSave}
        onClose={() => setShowSave(false)}
        onConfirm={handleSave}
        title="Save Changes?"
        message="Do you want to save your changes before leaving?"
        confirmText="Save"
        cancelText="Discard"
      />
    </>
  );
}
```

### 7. Toggle Examples

```tsx
import { Toggle } from 'drk-ui-components';
import { useState } from 'react';

function ToggleExamples() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailUpdates: false,
    autoSave: true,
  });

  return (
    <>
      <Toggle
        checked={settings.darkMode}
        onChange={(checked) => setSettings({ ...settings, darkMode: checked })}
        label="Dark Mode"
        helper_text="Enable dark theme for better visibility at night"
      />

      <Toggle
        checked={settings.notifications}
        onChange={(checked) => setSettings({ ...settings, notifications: checked })}
        label="Push Notifications"
      />

      <Toggle
        checked={settings.emailUpdates}
        onChange={(checked) => setSettings({ ...settings, emailUpdates: checked })}
        label="Email Updates"
        helper_text="Receive weekly newsletter and product updates"
      />

      <Toggle
        checked={settings.autoSave}
        onChange={(checked) => setSettings({ ...settings, autoSave: checked })}
        label="Auto Save"
        helper_text="Automatically save your work every 30 seconds"
      />
    </>
  );
}
```

### 8. Badge Examples

```tsx
import { Badge } from 'drk-ui-components';

function BadgeExamples() {
  return (
    <div className="space-y-4">
      {/* Status badges */}
      <div className="flex gap-2">
        <Badge variant="green">Active</Badge>
        <Badge variant="red">Inactive</Badge>
        <Badge variant="yellow">Pending</Badge>
        <Badge variant="blue">Processing</Badge>
      </div>

      {/* Priority badges */}
      <div className="flex gap-2">
        <Badge variant="red">High Priority</Badge>
        <Badge variant="yellow">Medium Priority</Badge>
        <Badge variant="gray">Low Priority</Badge>
      </div>

      {/* Custom styled badges */}
      <div className="flex gap-2">
        <Badge variant="purple" className="text-lg px-4 py-2">
          Premium
        </Badge>
        <Badge variant="primary" className="font-bold">
          New
        </Badge>
      </div>

      {/* Badges with counts */}
      <div className="flex items-center gap-2">
        <span>Messages</span>
        <Badge variant="red">5</Badge>
      </div>
    </div>
  );
}
```

### 9. Typography Examples

```tsx
import { Heading, Paragraph, Span } from 'drk-ui-components';

function TypographyExamples() {
  return (
    <>
      {/* Headings */}
      <Heading as="h1" className="text-4xl font-bold mb-4">
        Main Heading (H1)
      </Heading>

      <Heading as="h2" className="text-3xl font-semibold mb-3">
        Subheading (H2)
      </Heading>

      <Heading as="h3" className="text-2xl font-medium mb-2">
        Section Title (H3)
      </Heading>

      {/* Paragraphs */}
      <Paragraph className="text-gray-700 leading-relaxed mb-4">
        This is a paragraph with some text. You can style it however you want
        using Tailwind CSS classes.
      </Paragraph>

      {/* Spans within paragraph */}
      <Paragraph>
        This paragraph contains{' '}
        <Span className="font-bold text-primary-500">highlighted text</Span>
        {' '}and{' '}
        <Span className="italic text-gray-500">italic text</Span>.
      </Paragraph>

      {/* Styled text */}
      <Paragraph className="text-lg font-semibold text-gray-900">
        Large semibold paragraph
      </Paragraph>

      <Paragraph className="text-sm text-gray-600">
        Small gray paragraph for secondary information
      </Paragraph>
    </>
  );
}
```

### 10. Complete Form Example

See `App.tsx` for a comprehensive example that combines all components together in a working registration form.

## Tips and Best Practices

1. **Always import the CSS**: `import 'drk-ui-components/dist/index.css'`
2. **Use TypeScript**: All components are fully typed
3. **Customize with Tailwind**: Use the `className` prop for custom styling
4. **Manage State**: Use React hooks (`useState`) for controlled components
5. **Accessibility**: Components include ARIA attributes and keyboard navigation
6. **Portal Rendering**: Dropdowns and modals use React portals for proper layering

## Troubleshooting

### Styles not appearing

Make sure you've imported the CSS file:
```tsx
import 'drk-ui-components/dist/index.css';
```

### TypeScript errors

Install type definitions:
```bash
npm install --save-dev @types/react @types/react-dom
```

### Tailwind classes not working

Ensure your `tailwind.config.js` includes the library path:
```javascript
content: [
  "./node_modules/drk-ui-components/**/*.{js,ts,jsx,tsx}",
]
```
