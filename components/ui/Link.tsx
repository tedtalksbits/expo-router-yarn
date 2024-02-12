import { useTheme } from '@/hooks/useTheme';
import { Link as LinkComponent } from 'expo-router';

interface LinkProps
  extends React.ComponentPropsWithoutRef<typeof LinkComponent> {}

export function Link({ style, children, ...props }: LinkProps) {
  const { themeColors } = useTheme();
  const { foreground } = themeColors;

  return (
    <LinkComponent style={[style, { color: foreground() }]} {...props}>
      {children}
    </LinkComponent>
  );
}
