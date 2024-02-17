export type ThemeColorFunction = (opacity?: number) => string;

export interface AppColors {
  background: ThemeColorFunction;
  foreground: ThemeColorFunction;
  border: ThemeColorFunction;
  ring: ThemeColorFunction;
  input: ThemeColorFunction;
  card: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  primary: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  secondary: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  success: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  destructive: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  accent: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  popover: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
  muted: {
    bg: ThemeColorFunction;
    foreground: ThemeColorFunction;
  };
}

export interface AppTheme {
  fontFamily?: {
    [key: string]: string;
  };
  boderRadius?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
  };
  spacing?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
  };
  colors: {
    light: AppColors;
    dark: AppColors;
  };
}
