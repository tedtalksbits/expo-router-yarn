import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/lib/useClientOnlyValue';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from '@/hooks/useTheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <TabsLayout />;
}

function TabsLayout() {
  const { themeColors } = useTheme();
  const { primary } = themeColors;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primary.bg(),
        tabBarInactiveTintColor: 'gray',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name='settings' color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
