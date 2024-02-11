import { useColorScheme, Appearance } from 'react-native';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';

  const toggleTheme = () => {
    Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  const themeClass = colorScheme === 'light' ? classes.light : classes.dark;

  return { colorScheme, toggleTheme, themeClass };
}

const classes = {
  light: {
    background: 'bg-light-background',
    card: 'bg-light-card',
    primary: 'bg-light-primary',
    secondary: 'bg-light-secondary',
    foreground: 'text-light-foreground',
  },
  dark: {
    background: 'bg-dark-background',
    card: 'bg-dark-card',
    primary: 'bg-dark-primary',
    secondary: 'bg-dark-secondary',
    foreground: 'text-dark-foreground',
  },
};
