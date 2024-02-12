import { View, Text, SafeAreaView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { AppProvider } from '@/providers/app';
import { useTheme } from '@/hooks/useTheme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ScreenLayout from '@/components/layouts/ScreenLayout';
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <AppLayout />;
}
function AppLayout() {
  const { themeColors } = useTheme();
  const { background, foreground } = themeColors;
  return (
    <AppProvider>
      {/* <SafeAreaView
        className='flex-1'
        style={{
          backgroundColor: background(),
        }}
      >
        <Text
          className='text-center text-lg font-bold'
          style={{
            color: foreground(),
          }}
        >
          AppLayout
        </Text>
        <Slot />
      </SafeAreaView> */}
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
      </Stack>
    </AppProvider>
  );
}
