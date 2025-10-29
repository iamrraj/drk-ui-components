import type { ClassValue } from "./types";

const toClassArray = (value: ClassValue): string[] => {
  if (!value) {
    return [];
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value).split(" ").filter(Boolean);
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => toClassArray(item)).filter(Boolean);
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .flatMap(([key]) => key.split(" ").filter(Boolean));
  }

  return [];
};

/**
 * Merge class names similar to libraries like clsx/tailwind-merge but framework-agnostic.
 * Handles strings, numbers, arrays, and object maps of truthy values.
 */
export const cn = (...inputs: ClassValue[]): string => {
  return inputs.flatMap((input) => toClassArray(input)).join(" ");
};

export default cn;
