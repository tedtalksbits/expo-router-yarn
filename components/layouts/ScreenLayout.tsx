import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { StatusBar } from 'expo-status-bar';
interface ScreenLayoutProps {
  children: React.ReactNode;
}
export default function ScreenLayout({ children }: ScreenLayoutProps) {
  const { themeColors } = useTheme();
  const { background } = themeColors;
  return (
    <SafeAreaView
      className='flex-1'
      style={{
        backgroundColor: background(),
      }}
    >
      {children}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
