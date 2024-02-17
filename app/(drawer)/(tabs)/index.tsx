import { View, Pressable } from 'react-native';
import React from 'react';

import { Text } from '@/components/ui/Text';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { Link } from '@/components/ui/Link';
import { useTheme } from '@/hooks/useTheme';
import MessagesList from '@/components/message/MessageList';

export default function PageOne() {
  const { toggleTheme, colorScheme, themeColors } = useTheme();
  const {
    background,
    card,
    primary,
    secondary,
    foreground,
    destructive,
    accent,
    popover,
    muted,
    border,
  } = themeColors;
  return (
    <ScreenLayout>
      {/* <View>
        <Text>PageOne</Text>
        <Link href='/settings'>
          <Text>Go to settings</Text>
        </Link>
        <Link href='/modal'>
          <Text>Open Modal</Text>
        </Link>
      </View> */}

      <View className='flex-1 p-2'>
        <MessagesList />
        {/* <StatusBar style='auto' /> */}
      </View>
    </ScreenLayout>
  );
}
