/**
 * Complete Example Application
 * Demonstrates all DRK UI Components with real working examples
 */

import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Label,
  Heading,
  Paragraph,
  Span,
  Badge,
  Toggle,
  Dropdown,
  CustomMultiSelect,
  Modal,
  ConfirmationModal,
  Tooltip,
  TooltipWrapper,
  DropdownOption,
  SelectOption,
} from 'drk-ui-components';
import 'drk-ui-components/dist/index.css';

function App() {
  // State management for all components
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<DropdownOption | null>(null);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dropdown options
  const countries: DropdownOption[] = [
    { id: 'us', label: 'United States' },
    { id: 'uk', label: 'United Kingdom' },
    { id: 'ca', label: 'Canada' },
    { id: 'au', label: 'Australia' },
    { id: 'de', label: 'Germany' },
    { id: 'fr', label: 'France' },
    { id: 'jp', label: 'Japan' },
    { id: 'in', label: 'India' },
  ];

  // Multi-select options
  const frameworks: SelectOption[] = [
    { id: '1', name: 'React' },
    { id: '2', name: 'Vue' },
    { id: '3', name: 'Angular' },
    { id: '4', name: 'Svelte' },
    { id: '5', name: 'Next.js' },
    { id: '6', name: 'Nuxt.js' },
  ];

  const categories: SelectOption[] = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'fullstack', name: 'Full Stack Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log('Form Data:', {
      name,
      email,
      password,
      country: selectedCountry,
      frameworks: selectedFrameworks,
      category: selectedCategory,
      darkMode,
      notifications,
    });
  };

  const handleDelete = () => {
    console.log('Item deleted');
    setShowConfirmation(false);
    // Reset form
    setName('');
    setEmail('');
    setPassword('');
    setSelectedCountry(null);
    setSelectedFrameworks([]);
    setSelectedCategory([]);
    setFormSubmitted(false);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Card className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <Heading as="h1" className="text-4xl font-bold text-gray-900">
              DRK UI Components Demo
            </Heading>
            <Badge variant="primary" className="text-sm">
              v1.0.0
            </Badge>
          </div>
          <Paragraph className="text-gray-600 text-lg">
            A complete showcase of all available components with real working examples.
          </Paragraph>
        </Card>

        {/* Badges Section */}
        <Card className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <Heading as="h2" className="text-2xl font-bold text-gray-900 mb-4">
            Badges
          </Heading>
          <div className="flex flex-wrap gap-2">
            <Badge variant="green">Active</Badge>
            <Badge variant="red">Error</Badge>
            <Badge variant="yellow">Warning</Badge>
            <Badge variant="blue">Info</Badge>
            <Badge variant="gray">Inactive</Badge>
            <Badge variant="purple">Premium</Badge>
            <Badge variant="primary">Featured</Badge>
          </div>
        </Card>

        {/* Tooltips Section */}
        <Card className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <Heading as="h2" className="text-2xl font-bold text-gray-900 mb-4">
            Tooltips
          </Heading>
          <div className="flex gap-4">
            <TooltipWrapper tooltipContent="This is a helpful tooltip" placement="top">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Hover Top
              </Button>
            </TooltipWrapper>

            <TooltipWrapper tooltipContent="Bottom tooltip example" placement="bottom">
              <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Hover Bottom
              </Button>
            </TooltipWrapper>

            <div className="flex items-center gap-2">
              <Span className="text-gray-700">Info Tooltip:</Span>
              <Tooltip content="This is an info tooltip that appears on click or hover" />
            </div>
          </div>
        </Card>

        {/* Main Form */}
        <Card className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <Heading as="h2" className="text-2xl font-bold text-gray-900 mb-6">
            Registration Form
          </Heading>

          {formSubmitted && (
            <Card className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
              <Paragraph className="text-green-800 font-semibold">
                ✓ Form submitted successfully! Check console for data.
              </Paragraph>
            </Card>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Text Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="fullName"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                helpText="Enter your full name as it appears on official documents"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                helpText="We'll never share your email"
              />
            </div>

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              helpText="Minimum 8 characters"
              minLength={8}
            />

            {/* Dropdown */}
            <div>
              <Label helper_text="Select your country of residence">
                Country
              </Label>
              <Dropdown
                options={countries}
                selectedOption={selectedCountry}
                onSelect={setSelectedCountry}
                placeholder="Select your country"
                className="mt-1"
              />
            </div>

            {/* Multi-Select */}
            <CustomMultiSelect
              options={frameworks}
              selectedItems={selectedFrameworks}
              onSelect={setSelectedFrameworks}
              label="Frameworks You Know"
              placeholder="Select frameworks"
              multiple={true}
            />

            {/* Single Select via Multi-Select */}
            <CustomMultiSelect
              options={categories}
              selectedItems={selectedCategory}
              onSelect={setSelectedCategory}
              label="Primary Interest"
              placeholder="Choose one category"
              multiple={false}
            />

            {/* Toggles */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <Toggle
                checked={darkMode}
                onChange={setDarkMode}
                label="Dark Mode"
                helper_text="Enable dark theme for the entire application"
              />

              <Toggle
                checked={notifications}
                onChange={setNotifications}
                label="Email Notifications"
                helper_text="Receive updates about your account via email"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <Button
                type="submit"
                className="flex-1 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
              >
                Submit Form
              </Button>

              <Button
                type="button"
                onClick={() => setShowModal(true)}
                className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Open Modal
              </Button>

              <Button
                type="button"
                onClick={() => setShowConfirmation(true)}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                Reset Form
              </Button>
            </div>
          </form>
        </Card>

        {/* Data Display */}
        {(name || email || selectedCountry) && (
          <Card className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <Heading as="h3" className="text-xl font-bold text-gray-900 mb-4">
              Form Data Preview
            </Heading>
            <div className="space-y-2 font-mono text-sm bg-gray-50 p-4 rounded">
              {name && (
                <Paragraph>
                  <Span className="font-bold">Name:</Span> {name}
                </Paragraph>
              )}
              {email && (
                <Paragraph>
                  <Span className="font-bold">Email:</Span> {email}
                </Paragraph>
              )}
              {selectedCountry && (
                <Paragraph>
                  <Span className="font-bold">Country:</Span> {selectedCountry.label}
                </Paragraph>
              )}
              {selectedFrameworks.length > 0 && (
                <Paragraph>
                  <Span className="font-bold">Frameworks:</Span>{' '}
                  {frameworks
                    .filter((f) => selectedFrameworks.includes(f.id))
                    .map((f) => f.name)
                    .join(', ')}
                </Paragraph>
              )}
              {selectedCategory.length > 0 && (
                <Paragraph>
                  <Span className="font-bold">Category:</Span>{' '}
                  {categories.find((c) => c.id === selectedCategory[0])?.name}
                </Paragraph>
              )}
              <Paragraph>
                <Span className="font-bold">Dark Mode:</Span> {darkMode ? 'Yes' : 'No'}
              </Paragraph>
              <Paragraph>
                <Span className="font-bold">Notifications:</Span> {notifications ? 'Yes' : 'No'}
              </Paragraph>
            </div>
          </Card>
        )}

        {/* Modal Example */}
        {showModal && (
          <Modal className="max-w-3xl p-8">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              User Profile
            </Heading>
            <Paragraph className="text-gray-600 mb-6">
              This is a modal dialog demonstrating the Modal component with focus trapping
              and keyboard navigation support.
            </Paragraph>

            <div className="space-y-4 mb-6">
              <Input
                label="Username"
                placeholder="johndoe"
                defaultValue={name.toLowerCase().replace(' ', '')}
              />
              <Input
                label="Bio"
                placeholder="Tell us about yourself"
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                className="bg-primary-500 text-white px-6 py-2 rounded hover:bg-primary-600 transition-colors"
              >
                Save Changes
              </Button>
            </div>
          </Modal>
        )}

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleDelete}
          title="Reset Form?"
          message="Are you sure you want to reset all form data? This action cannot be undone."
          confirmText="Yes, reset it"
          cancelText="Cancel"
        />

        {/* Footer */}
        <Card className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Paragraph className="text-gray-600">
            Built with{' '}
            <Span className="text-red-500">❤️</Span> using{' '}
            <Span className="font-bold text-primary-500">DRK UI Components</Span>
          </Paragraph>
        </Card>
      </div>
    </div>
  );
}

export default App;
