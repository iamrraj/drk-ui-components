# Props Reference - DRK UI Components

Complete reference guide for all component props.

## Table of Contents

- [Button](#button)
- [Card](#card)
- [Stack](#stack)
- [Input](#input)
- [Label](#label)
- [Heading](#heading)
- [Paragraph](#paragraph)
- [Span](#span)
- [Badge](#badge)
- [VisuallyHidden](#visuallyhidden)
- [Toggle](#toggle)
- [Dropdown](#dropdown)
- [CustomMultiSelect](#custommultiselect)
- [Modal](#modal)
- [ConfirmationModal](#confirmationmodal)
- [Tooltip](#tooltip)
- [TooltipWrapper](#tooltipwrapper)
- [Popover](#popover)
- [Toast](#toast)
- [ToastProvider](#toastprovider)
- [Accordion](#accordion)
- [Sheet](#sheet)
- [Table](#table)
- [Hooks](#hooks)

---

## Button

Flexible button component with variants, sizes, and loading states.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Button content (text, icons, etc.) |
| `text` | `string` | - | No | **Deprecated** helper text for children fallback |
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "link" \| "destructive"` | `"primary"` | No | Visual style of the button |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `"md"` | No | Defines button height and spacing |
| `loading` | `boolean` | `false` | No | Shows an inline spinner and disables interactions |
| `loadingText` | `React.ReactNode` | - | No | Optional text displayed alongside the spinner |
| `startIcon` | `React.ReactNode` | - | No | Icon rendered before the button content |
| `endIcon` | `React.ReactNode` | - | No | Icon rendered after the button content |
| `fullWidth` | `boolean` | `false` | No | Forces the button to take the full available width |
| `className` | `string` | - | No | Tailwind classes appended to the root element |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | No | Native button type |
| `disabled` | `boolean` | `false` | No | Disables the button |
| ...HTMLButtonAttributes | - | - | No | Any standard button attribute |

### Example
```tsx
import { BiArrowBack } from 'react-icons/bi';

<Button
  variant="secondary"
  size="lg"
  startIcon={<BiArrowBack className="h-4 w-4" />}
  onClick={() => console.log('clicked')}
>
  Back
</Button>
```

---

## Card

Versatile surface primitive with header/footer slots and appearance options.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Main content of the card |
| `variant` | `"elevated" \| "outline" \| "muted" \| "ghost"` | `"elevated"` | No | Visual treatment of the container |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | No | Controls internal spacing |
| `interactive` | `boolean` | `false` | No | Enables hover lift and focus ring for clickable cards |
| `header` | `React.ReactNode` | - | No | Optional region rendered before the body |
| `footer` | `React.ReactNode` | - | No | Optional region rendered after the body |
| `sectioned` | `boolean` | `false` | No | Adds dividers between header/body/footer |
| `headerClassName` | `string` | - | No | Additional classes for the header wrapper |
| `bodyClassName` | `string` | - | No | Extra classes applied to the body wrapper |
| `footerClassName` | `string` | - | No | Additional classes for the footer wrapper |
| `className` | `string` | - | No | Tailwind classes applied to the root element |
| ...HTMLDivAttributes | - | - | No | Any native div attribute |

### Example
```tsx
<Card
  variant="outline"
  padding="lg"
  sectioned
  header={<h2 className="text-lg font-semibold">Team Updates</h2>}
  footer={<Button variant="link">View all</Button>}
>
  <Stack gap="sm">
    <Paragraph className="text-sm text-gray-600">
      Product design sync moved to Thursday 2pm.
    </Paragraph>
    <Paragraph className="text-sm text-gray-600">
      Remember to update the sprint board before standup.
    </Paragraph>
  </Stack>
</Card>
```

---

## Stack

Utility flex container for consistent spacing and alignment.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Elements to lay out |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `"column"` | No | Flex direction |
| `gap` | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | No | Space between children |
| `align` | `"start" \| "center" \| "end" \| "stretch" \| "baseline"` | `"stretch"` | No | Align-items value |
| `justify` | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | `"start"` | No | Justify-content value |
| `inline` | `boolean` | `false` | No | Renders an `inline-flex` container when true |
| `wrap` | `boolean` | `false` | No | Enables `flex-wrap` |
| `className` | `string` | - | No | Additional Tailwind classes |
| ...HTMLDivAttributes | - | - | No | Any native div attribute |

### Example
```tsx
<Stack direction="row" gap="lg" align="center">
  <Avatar name="Rahul Raj" />
  <div>
    <Heading level={4}>Rahul Raj</Heading>
    <Paragraph className="text-gray-500">
      Building delightful frontend experiences.
    </Paragraph>
  </div>
</Stack>
```

---

## Input

Composable input field with icons, addons, variants, and validation helpers.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `label` | `string` | - | No | Optional label rendered above the field |
| `helperText` | `string` | - | No | Caption displayed below the input |
| `error` | `boolean` | `false` | No | Enables error styling |
| `errorMessage` | `string` | - | No | Message shown when `error` is true |
| `leftIcon` | `React.ReactNode` | - | No | Icon rendered at the start of the field |
| `rightIcon` | `React.ReactNode` | - | No | Icon rendered at the end of the field |
| `addonBefore` | `React.ReactNode` | - | No | Static prefix content (e.g. currency or protocols) |
| `addonAfter` | `React.ReactNode` | - | No | Static suffix content (e.g. units) |
| `variant` | `"default" \| "filled" \| "unstyled"` | `"default"` | No | Container styling preset |
| `inputSize` | `"sm" \| "md" \| "lg"` | `"md"` | No | Adjusts height and typography |
| `className` | `string` | - | No | Extra classes applied to the outer wrapper |
| `inputClassName` | `string` | - | No | Additional classes merged into the `<input>` |
| `inputProps` | `InputHTMLAttributes<HTMLInputElement>` | - | No | **Deprecated**. Prefer passing props directly |
| ...HTMLInputAttributes | - | - | No | Any standard input attribute (type, value, etc.) |

### Example
```tsx
import { BiEnvelope, BiKey } from 'react-icons/bi';

<Input
  name="email"
  label="Email address"
  type="email"
  placeholder="you@example.com"
  leftIcon={<BiEnvelope className="h-4 w-4" />}
  addonAfter="@company.com"
  helperText="We send meeting summaries here"
/>

<Input
  name="password"
  type="password"
  variant="filled"
  inputSize="lg"
  leftIcon={<BiKey className="h-4 w-4" />}
  error
  errorMessage="Password must be at least 12 characters"
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

Status indicator or label component with appearance and size controls.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | No | Badge content |
| `variant` | `"gray" \| "red" \| "green" \| "blue" \| "yellow" \| "purple" \| "primary"` | `"gray"` | No | Semantic color tone |
| `appearance` | `"solid" \| "soft" \| "outline"` | `"soft"` | No | Presentation style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | No | Controls height and typography |
| `radius` | `"md" \| "lg" \| "pill"` | `"lg"` | No | Rounding applied to the container |
| `withDot` | `boolean` | `false` | No | Prepends a small colored dot |
| `dotClassName` | `string` | - | No | Custom classes for the indicator dot |
| `className` | `string` | - | No | Additional Tailwind classes |
| ...HTMLSpanAttributes | - | - | No | Any span attribute |

### Example
```tsx
<Stack direction="row" gap="sm">
  <Badge variant="green" appearance="solid" withDot>
    Active
  </Badge>
  <Badge variant="yellow" appearance="outline" size="sm">
    Pending
  </Badge>
  <Badge variant="primary" radius="pill" size="lg">
    New Feature
  </Badge>
</Stack>
```

---

## VisuallyHidden

Screen-reader only text helper.

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | Content exposed to assistive technologies |
| `className` | `string` | - | No | Additional classes appended to the hidden element |
| ...HTMLSpanAttributes | - | - | No | Any span attribute |

### Example
```tsx
<Button className="relative">
  <IconBell aria-hidden="true" />
  <VisuallyHidden>View notifications</VisuallyHidden>
</Button>
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

## Popover

Composed floating panel anchored to a trigger element.

### Popover

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `open` | `boolean` | - | No | Controls visibility (controlled mode) |
| `defaultOpen` | `boolean` | `false` | No | Initial visibility (uncontrolled mode) |
| `onOpenChange` | `(open: boolean) => void` | - | No | Callback fired when the popover open state changes |
| `className` | `string` | - | No | Classes applied to the wrapper element |
| `children` | `React.ReactNode` | - | Yes | Include trigger and content elements |

### PopoverTrigger

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactElement` | - | Yes | Interactive element that toggles the popover |
| `disabled` | `boolean` | `false` | No | Prevents toggling while keeping the trigger rendered |

### PopoverContent

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | No | Preferred placement relative to the trigger |
| `align` | `"start" \| "center" \| "end"` | `"center"` | No | Alignment of the panel on the chosen side |
| `className` | `string` | - | No | Extra classes for styling the panel |
| ...HTMLDivAttributes | - | - | No | All standard div attributes |

### PopoverClose

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactElement` | - | Yes | Element that closes the popover when activated |

### Example
```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  Button,
  Stack,
} from '@iamrraj/drk-ui-components';

<Popover>
  <PopoverTrigger>
    <Button variant="outline">More actions</Button>
  </PopoverTrigger>
  <PopoverContent className="space-y-2">
    <Stack gap="sm">
      <Button variant="ghost">Rename</Button>
      <Button variant="ghost">Duplicate</Button>
      <PopoverClose>
        <Button variant="ghost" className="text-red-600">
          Delete
        </Button>
      </PopoverClose>
    </Stack>
  </PopoverContent>
</Popover>
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

## Sheet

Accessible sliding panel (drawer) with trigger/content composition.

### Sheet

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `open` | `boolean` | - | No | Controls visibility (controlled mode) |
| `defaultOpen` | `boolean` | `false` | No | Initial visibility in uncontrolled mode |
| `onOpenChange` | `(open: boolean) => void` | - | No | Fired whenever the sheet opens or closes |
| `children` | `React.ReactNode` | - | Yes | Include trigger, content, and related subcomponents |

### SheetTrigger

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactElement` | - | Yes | Element that toggles the sheet |

### SheetContent

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `side` | `"left" \| "right" \| "top" \| "bottom"` | `"right"` | No | Slide-in direction |
| `showOverlay` | `boolean` | `true` | No | Toggle background overlay |
| `className` | `string` | - | No | Additional classes for the dialog panel |
| ...HTMLDivAttributes | - | - | No | Native div props |

### SheetClose

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactElement` | - | Yes | Element that closes the sheet |

### SheetHeader & SheetFooter

Simple layout helpers for structured header/footer regions.

| Component | Description |
|-----------|-------------|
| `SheetHeader` | Vertical stack for titles, breadcrumbs, etc. |
| `SheetFooter` | Button row that stacks on mobile and aligns right on desktop |

### SheetTitle & SheetDescription

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `children` | `React.ReactNode` | - | Yes | Heading/description content |
| `className` | `string` | - | No | Tailwind classes |
| `id` | `string` | Auto-generated | No | Accessible ID used by the dialog |

### Example
```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Button,
  Stack,
  Input,
} from '@iamrraj/drk-ui-components';

<Sheet>
  <SheetTrigger>
    <Button>Open filters</Button>
  </SheetTrigger>
  <SheetContent side="right" className="max-w-md">
    <SheetHeader>
      <SheetTitle>Project filters</SheetTitle>
      <SheetDescription>Refine the project list using tags and owners.</SheetDescription>
    </SheetHeader>

    <Stack gap="md" className="py-4">
      <Input label="Owner" placeholder="Search teammates" />
      <Input label="Tag" placeholder="Design, Backend, ..." />
    </Stack>

    <SheetFooter>
      <SheetClose>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button variant="primary">Apply filters</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

## Hooks

### useDisclosure

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controls state in controlled mode |
| `defaultOpen` | `boolean` | `false` | Initial state in uncontrolled mode |
| `onOpenChange` | `(open: boolean) => void` | - | Callback fired on state changes |

**Returns:** `{ isOpen, open, close, toggle, setOpen }`

### useMediaQuery

| Param | Type | Description |
|-------|------|-------------|
| `query` | `string` | CSS media query to evaluate |
| `initialValue` | `boolean` | Optional default for SSR |

**Returns:** `boolean` indicating whether the media query currently matches.

### usePrefersColorScheme

Detects the user's preferred color scheme.

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `defaultScheme` | `"light" \| "dark"` | `"light"` | Fallback when no preference is detected |

**Returns:** `"light"` or `"dark"`.

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
