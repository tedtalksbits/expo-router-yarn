import { Text as TextComponent } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
const textVariants = cva('text-base', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold',
      p: 'text-base',
      link: 'text-blue-500 underline',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});
interface TextProps
  extends React.ComponentPropsWithoutRef<typeof TextComponent>,
    VariantProps<typeof textVariants> {}

function Text({ style, children, className, variant, ...props }: TextProps) {
  const { themeColors } = useTheme();
  const { foreground } = themeColors;
  return (
    <TextComponent
      className={cn(textVariants({ variant }), className)}
      style={[style, { color: foreground() }]}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
/*
  ========================================
  ALTERNAIVE IMPLEMENTATION
  ========================================
*/

// function H1({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-4xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H2({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-3xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H3({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-2xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H4({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H5({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-lg font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H6({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-base font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// // create a paragraph component

// function P({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-base', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// Text.H1 = H1;
// Text.H2 = H2;
// Text.H3 = H3;
// Text.H4 = H4;
// Text.H5 = H5;
// Text.H6 = H6;
// Text.P = P;

export { Text };
