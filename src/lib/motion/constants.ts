export const DURATION = {
  instant: 0,
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
} as const;

export const DISTANCE = {
  none: 0,
  xs: 10,
  sm: 20,
  md: 30,
  lg: 50,
  xl: 80,
} as const;

export const EASING = {
  easeOut: "easeOut",
  easeInOut: "easeInOut",
  spring: [0.25, 1, 0.5, 1],
} as const;

export const DELAY = {
  none: 0,
  xs: 0.2,
  sm: 0.4,
  md: 0.6,
  lg: 0.8,
  xl: 1,
} as const;
