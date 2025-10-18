# Props Reference - DRK UI Components

Complete reference guide for all component props.

## Table of Contents

- [Button](#button)
- [Card](#card)
- [Input](#input)
- [Label](#label)
- [Heading](#heading)
- [Paragraph](#paragraph)
- [Span](#span)
- [Badge](#badge)
- [Toggle](#toggle)
- [Dropdown](#dropdown)
- [CustomMultiSelect](#custommultiselect)
- [Modal](#modal)
- [ConfirmationModal](#confirmationmodal)
- [Tooltip](#tooltip)
- [TooltipWrapper](#tooltipwrapper)
- [Toast](#toast)
- [ToastProvider](#toastprovider)

---

## Button

Fully customizable button component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | Button content (text, icons, etc.) |
| `onClick` | `(event: MouseEvent) => void` | - | No | Click event handler |
| `className` | `string` | `""` | No | Additional Tailwind CSS classes |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | No | Button type attribute |
| `disabled` | `boolean` | `false` | No | Disables the button |
| ...HTMLButtonAttributes | - | - | No | All standard HTML button attributes |

### Example
```tsx
<Button
  onClick={() => console.log('clicked')}
  className="bg-primary-500 text-white px-4 py-2 rounded"
  type="submit"
>
  Submit Form
</Button>
```

---

## Card

Container component for grouping content.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Card content |
| `className` | `string` | `""` | No | Additional Tailwind CSS classes |
| `id` | `string` | - | No | Unique identifier |
| `onClick` | `(e: React.MouseEvent) => void` | - | No | Click event handler |
| ...HTMLDivAttributes | - | - | No | All standard HTML div attributes |

### Example
```tsx
<Card className="bg-white p-6 rounded-lg shadow-md">
  <h2>Card Title</h2>
  <p>Card content here</p>
</Card>
```

---

## Input

Text input field with label and validation support.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `label` | `string` | - | No | Label text |
| `type` | `string` | `"text"` | No | Input type (text, email, password, etc.) |
| `placeholder` | `string` | - | No | Placeholder text |
| `value` | `string \| number` | - | No | Input value (controlled) |
| `onChange` | `(event: ChangeEvent) => void` | - | No | Change event handler |
| `className` | `string` | - | No | Container CSS classes |
| `name` | `string` | - | No | Input name attribute |
| `maxLength` | `number` | - | No | Maximum input length |
| `required` | `boolean` | `false` | No | Marks field as required |
| `helpText` | `string` | - | No | Helper text below input |
| `min` | `string` | - | No | Minimum value (date/number inputs) |
| `disabled` | `boolean` | `false` | No | Disables the input |
| `tabIndex` | `number` | - | No | Tab order |

### Example
```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  helpText="We'll never share your email"
/>
```

---

## Label

Form label with optional helper text tooltip.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Label content |
| `className` | `string` | `""` | No | Additional CSS classes |
| `required` | `boolean` | `false` | No | Shows red asterisk |
| `helper_text` | `string` | - | No | Text shown in tooltip |
| `htmlFor` | `string` | - | No | ID of associated form element |

### Example
```tsx
<Label
  htmlFor="password"
  required
  helper_text="Minimum 8 characters"
>
  Password
</Label>
```

---

## Heading

Semantic heading component (h1-h6).

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | Heading content |
| `className` | `string` | `""` | No | Additional CSS classes |
| `as` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"h2"` | No | Heading level |

### Example
```tsx
<Heading as="h1" className="text-4xl font-bold text-gray-900">
  Page Title
</Heading>
```

---

## Paragraph

Text paragraph component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Paragraph content |
| `className` | `string` | `""` | No | Additional CSS classes |

### Example
```tsx
<Paragraph className="text-gray-700 leading-relaxed">
  This is a paragraph of text.
</Paragraph>
```

---

## Span

Inline text component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Span content |
| `className` | `string` | `""` | No | Additional CSS classes |

### Example
```tsx
<Span className="text-primary-500 font-bold">
  Highlighted text
</Span>
```

---

## Badge

Status indicator or label component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Badge content |
| `className` | `string` | `""` | No | Additional CSS classes |
| `variant` | `"gray" \| "red" \| "green" \| "blue" \| "yellow" \| "purple" \| "primary"` | `"gray"` | No | Color variant |

### Example
```tsx
<Badge variant="green">Active</Badge>
<Badge variant="red">Error</Badge>
```

---

## Toggle

On/off switch component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `checked` | `boolean` | - | Yes | Current checked state |
| `onChange` | `(checked: boolean) => void` | - | Yes | Change handler |
| `label` | `string` | - | No | Label text |
| `helper_text` | `string` | - | No | Helper text in tooltip |

### Example
```tsx
<Toggle
  checked={darkMode}
  onChange={setDarkMode}
  label="Dark Mode"
  helper_text="Enable dark theme"
/>
```

---

## Dropdown

Single-select dropdown with search.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `options` | `DropdownOption[]` | - | Yes | Array of options |
| `selectedOption` | `DropdownOption \| null` | - | Yes | Currently selected option |
| `onSelect` | `(option: DropdownOption) => void` | - | Yes | Selection handler |
| `placeholder` | `string` | `"Select an option"` | No | Placeholder text |
| `onClear` | `() => void` | - | No | Clear selection handler |
| `className` | `string` | `""` | No | Additional CSS classes |
| `disabled` | `boolean` | `false` | No | Disables the dropdown |
| `tabIndex` | `number` | - | No | Tab order |

### DropdownOption Interface
```tsx
interface DropdownOption {
  id: string | number;
  label: string;
}
```

### Example
```tsx
const countries = [
  { id: 'us', label: 'United States' },
  { id: 'uk', label: 'United Kingdom' },
];

<Dropdown
  options={countries}
  selectedOption={selected}
  onSelect={setSelected}
  placeholder="Select country"
/>
```

---

## CustomMultiSelect

Multi or single select with filtering.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `options` | `SelectOption[]` | - | Yes | Array of options |
| `selectedItems` | `string[]` | - | Yes | Array of selected IDs |
| `onSelect` | `(selected: string[]) => void` | - | Yes | Selection handler |
| `label` | `string` | - | Yes | Label text |
| `multiple` | `boolean` | `true` | No | Allow multiple selections |
| `classes` | `string` | - | No | Additional CSS classes |
| `placeholder` | `string` | - | No | Placeholder text |

### SelectOption Interface
```tsx
interface SelectOption {
  id: string;
  name: string;
}
```

### Example
```tsx
const frameworks = [
  { id: '1', name: 'React' },
  { id: '2', name: 'Vue' },
];

<CustomMultiSelect
  options={frameworks}
  selectedItems={selected}
  onSelect={setSelected}
  label="Frameworks"
  multiple={true}
/>
```

---

## Modal

Dialog modal with focus trapping.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Modal content |
| `id` | `string` | `""` | No | Unique identifier |
| `className` | `string` | `"max-w-lg"` | No | Additional CSS classes for modal container |

### Example
```tsx
<Modal className="max-w-2xl p-6">
  <h2>Modal Title</h2>
  <p>Modal content</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>
```

---

## ConfirmationModal

Confirmation dialog for user actions.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `isOpen` | `boolean` | - | Yes | Controls visibility |
| `onClose` | `() => void` | - | Yes | Close/cancel handler |
| `onConfirm` | `() => void` | - | Yes | Confirm/submit handler |
| `title` | `string` | - | Yes | Modal title |
| `message` | `string` | - | Yes | Modal message/description |
| `confirmText` | `string` | `"Yes, delete it"` | No | Confirm button text |
| `cancelText` | `string` | `"Cancel"` | No | Cancel button text |

### Example
```tsx
<ConfirmationModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onConfirm={handleDelete}
  title="Delete Item?"
  message="This action cannot be undone."
  confirmText="Delete"
  cancelText="Cancel"
/>
```

---

## Tooltip

Info icon with hover tooltip.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `content` | `string \| React.ReactNode` | - | Yes | Tooltip content |
| `className` | `string` | `""` | No | Additional CSS classes |

### Example
```tsx
<Tooltip content="Click for more information" />
```

---

## TooltipWrapper

Wrap any element with tooltip functionality.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | Element to wrap |
| `tooltipContent` | `string` | - | Yes | Tooltip text |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | No | Tooltip position |

### Example
```tsx
<TooltipWrapper tooltipContent="Save changes" placement="top">
  <Button>Save</Button>
</TooltipWrapper>
```

---

## Toast

Toast notification component.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | Yes | Toast title |
| `message` | `string` | - | Yes | Toast message |
| `type` | `"success" \| "error" \| "warning" \| "info"` | `"info"` | No | Toast type |
| `duration` | `number` | `3000` | No | Auto-dismiss duration (ms) |
| `theme` | `"light" \| "dark"` | `"dark"` | No | Theme variant |
| `onClose` | `() => void` | - | Yes | Close handler |

### Example
```tsx
<Toast
  title="Success!"
  message="Your changes have been saved"
  type="success"
  duration={3000}
  onClose={() => setShow(false)}
/>
```

---

## ToastProvider

Toast notification system provider.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | App content |
| `position` | `"left" \| "center" \| "right"` | `"right"` | No | Toast container position |
| `theme` | `"light" \| "dark"` | `"light"` | No | Default toast theme |

### useToast Hook

```tsx
const toast = useToast();

// Methods available:
toast.success(title, message, duration?);
toast.error(title, message, duration?);
toast.warning(title, message, duration?);
toast.info(title, message, duration?);
```

### Example
```tsx
import { ToastProvider, useToast } from '@iamrraj/drk-ui-components';

function App() {
  return (
    <ToastProvider position="right" theme="dark">
      <MyApp />
    </ToastProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  const handleSave = () => {
    toast.success('Saved!', 'Your changes have been saved');
  };

  return <Button onClick={handleSave}>Save</Button>;
}
```

---

## Tips

### Combining Props

All components support combining custom classes with their base styles:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6">
  Fancy Button
</Button>
```

### TypeScript Support

Import types as needed:

```tsx
import type { ButtonProps, InputProps, DropdownOption } from '@iamrraj/drk-ui-components';
```

### Accessibility

- All interactive components support keyboard navigation
- ARIA attributes are included
- Focus management in modals
- Screen reader friendly

---

For more examples, see [EXAMPLES.md](./examples/EXAMPLES.md)
