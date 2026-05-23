export const colors = {
  bg: "#0f0f0f",
  surface: "#1a1a1a",
  primary: "#ffffff",
  accent: "#cc1111",
  accentDark: "#8b0000",
  muted: "#888888",
  border: "#2a2a2a",
} as const;

export const fonts = {
  body: "var(--font-inter), sans-serif",
  heading: "var(--font-space-grotesk), sans-serif",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "4rem",
  section: "6rem",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const transitions = {
  fast: "0.15s ease",
  base: "0.3s ease",
  slow: "0.5s ease",
} as const;

export const zIndex = {
  header: 100,
  overlay: 200,
  modal: 300,
} as const;
