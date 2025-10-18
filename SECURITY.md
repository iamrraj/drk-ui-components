# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The DRK UI Components team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings.

### Where to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:

**Email:** [Your security email - e.g., security@yourproject.com or your personal email]

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

### What to Include

To help us better understand the nature and scope of the issue, please include as much of the following information as possible:

- Type of issue (e.g., XSS, injection, CSRF, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

After you submit a report:

1. **Acknowledgment**: We'll acknowledge receipt of your vulnerability report within 48 hours
2. **Communication**: We'll send you regular updates about our progress
3. **Timeline**: We aim to patch critical vulnerabilities within 7 days
4. **Credit**: If you'd like, we'll publicly acknowledge your responsible disclosure once the vulnerability is patched
5. **CVE**: For significant vulnerabilities, we'll work with you to obtain a CVE identifier

### Disclosure Policy

- We ask that you give us reasonable time to investigate and mitigate an issue before public disclosure
- We'll keep you informed about the progress toward a fix and full announcement
- We'll credit you in the security advisory (unless you prefer to remain anonymous)
- Once the issue is resolved, we'll publish a security advisory on GitHub

## Security Best Practices for Users

When using DRK UI Components, we recommend:

### 1. Keep Dependencies Updated

```bash
# Check for updates
npm outdated

# Update to latest patch version
npm update drk-ui-components

# Update to latest version (review breaking changes)
npm install drk-ui-components@latest
```

### 2. Sanitize User Input

Always sanitize user input before passing it to components:

```tsx
import DOMPurify from 'dompurify';
import { Input } from 'drk-ui-components';

function MyForm() {
  const handleChange = (e) => {
    const sanitized = DOMPurify.sanitize(e.target.value);
    // Use sanitized value
  };

  return <Input onChange={handleChange} />;
}
```

### 3. Validate Props

Validate component props, especially when they come from user input or external sources:

```tsx
import { Button } from 'drk-ui-components';

function MyComponent({ userProvidedHref }) {
  // Validate URL before using
  const isValidUrl = (url) => {
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const safeHref = isValidUrl(userProvidedHref) ? userProvidedHref : '#';

  return <Button as="a" href={safeHref}>Link</Button>;
}
```

### 4. Content Security Policy

Implement a strong Content Security Policy (CSP) in your application:

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'">
```

### 5. Avoid Dangerous Props

Be cautious with props that accept HTML or JavaScript:

```tsx
// ❌ Avoid if possible
<Component dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ Better: Use safe text rendering
<Component>{userContent}</Component>
```

### 6. Regular Audits

Regularly audit your dependencies for known vulnerabilities:

```bash
# Using npm
npm audit
npm audit fix

# Using yarn
yarn audit
```

### 7. Server-Side Rendering (SSR) Considerations

If using SSR, be aware of potential XSS vectors:

```tsx
// ❌ Dangerous
const ServerComponent = ({ data }) => (
  <div dangerouslySetInnerHTML={{ __html: data.content }} />
);

// ✅ Safe
const ServerComponent = ({ data }) => (
  <div>{data.content}</div>
);
```

## Known Security Considerations

### Client-Side Components

DRK UI Components are client-side React components. Security considerations:

- **No server-side validation**: Always validate on the server
- **Client-side only**: Do not rely on client-side validation for security
- **Data exposure**: Anything in props is visible in client-side code

### Third-Party Dependencies

We minimize dependencies to reduce attack surface:

- React (peer dependency)
- Tailwind CSS (dev dependency)

We regularly audit and update our dependencies.

### TypeScript Types

We provide TypeScript types to help catch errors at compile time, but they provide no runtime security guarantees.

## Security Updates

Security updates will be released as patch versions. Subscribe to releases to stay informed:

- Watch the repository on GitHub
- Follow release notifications
- Subscribe to npm package updates

## Bug Bounty Program

We currently do not have a bug bounty program, but we deeply appreciate security researchers who responsibly disclose vulnerabilities.

## Contact

For security-related questions that aren't vulnerabilities, you can:

- Open a [Discussion](https://github.com/iamrraj/drk-ui-components/discussions)
- Email: [Your contact email]

## Acknowledgments

We would like to thank the following individuals/organizations for responsibly disclosing security issues:

<!-- This section will be updated as reports are received and resolved -->

- None reported yet

---

**Remember**: Security is a shared responsibility. While we strive to make DRK UI Components secure, you must also follow security best practices in your application.
