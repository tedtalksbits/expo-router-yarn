import { useColorScheme, Appearance } from 'react-native';
import { AppTheme } from './types';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';

  const toggleTheme = () => {
    Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  const themeColors =
    colorScheme === 'light' ? appTheme.colors.light : appTheme.colors.dark;

  return { colorScheme, toggleTheme, themeColors };
}

export const appTheme: AppTheme = {
  fontFamily: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
  },
  boderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
  },
  colors: {
    light: {
      background: (o: number = 1) => `hsla(210 29% 97% / ${o})`,
      foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      border: (o: number = 1) => `hsla(210 11% 93% / ${o})`,
      ring: (o: number = 1) => `hsla(259 100% 63% / ${o})`,
      input: (o: number = 1) => `hsla(210 16% 87% / ${o})`,
      primary: {
        bg: (o: number = 1) => `hsla(259 100% 63% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
      secondary: {
        bg: (o: number = 1) => `hsla(223 10% 80% / ${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      },
      card: {
        bg: (o: number = 1) => `hsla(0 0% 100% / ${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      },
      accent: {
        bg: (o: number = 1) => `hsla(240 7% 97% / ${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      },
      muted: {
        bg: (o: number = 1) => `hsla(180 4% 95% / ${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      },
      popover: {
        bg: (o: number = 1) => `hsla((0 0% 100% / ${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% / ${o})`,
      },
      success: {
        bg: (o: number = 1) => `hsla(120 100% 40% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
      destructive: {
        bg: (o: number = 1) => `hsla(0 100% 50% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
    },
    dark: {
      background: (o: number = 1) => `hsla(0 0% 11% / ${o})`,
      foreground: (o: number = 1) => `hsla(140 16% 96% / ${o})`,
      border: (o: number = 1) => `hsla(0 0% 27% / ${o})`,
      ring: (o: number = 1) => `hsla(259 100% 63% / ${o})`,
      input: (o: number = 1) => `hsla(20 0% 27% / ${o})`,
      primary: {
        bg: (o: number = 1) => `hsla(259 100% 63% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
      secondary: {
        bg: (o: number = 1) => `hsla(283 4% 65% / ${o})`,
        foreground: (o: number = 1) => `hsla(140 16% 96% / ${o})`,
      },
      card: {
        bg: (o: number = 1) => `hsla(0 0% 17% / ${o})`,
        foreground: (o: number = 1) => `hsla(140 16% 96% / ${o})`,
      },
      accent: {
        bg: (o: number = 1) => `hsla(0 0% 27% / ${o})`,
        foreground: (o: number = 1) => `hsla(140 16% 96% / ${o})`,
      },
      muted: {
        bg: (o: number = 1) => `hsla(0 0% 12% / ${o})`,
        foreground: (o: number = 1) => `hsla(240 8% 60% / ${o})`,
      },
      popover: {
        bg: (o: number = 1) => `hsla((0 0% 17% / ${o})`,
        foreground: (o: number = 1) => `hsla(140 16% 96% / ${o})`,
      },
      success: {
        bg: (o: number = 1) => `hsla(120 100% 40% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
      destructive: {
        bg: (o: number = 1) => `hsla(0 84% 60% / ${o})`,
        foreground: (o: number = 1) => `hsla(0 0% 98% / ${o})`,
      },
    },
  },
};
