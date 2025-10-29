import useMediaQuery from "./useMediaQuery";

export type ColorScheme = "light" | "dark";

/**
 * Detect whether the user prefers a light or dark color scheme.
 */
export const usePrefersColorScheme = (defaultScheme: ColorScheme = "light"): ColorScheme => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLight = useMediaQuery("(prefers-color-scheme: light)");

  if (prefersDark) return "dark";
  if (prefersLight) return "light";
  return defaultScheme;
};

export default usePrefersColorScheme;
