import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import MessagesList from '@/components/message/MessageList';
import { StatusBar } from 'expo-status-bar';

export default function index() {
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
    <View className='flex-1 p-2'>
      <Pressable
        onPress={toggleTheme}
        className='p-4 rounded-[20px] my-3 items-center border'
        style={{
          backgroundColor: card.bg(),
          borderColor: border(),
        }}
      >
        <Text
          className='text-center text-lg font-bold'
          style={{
            color: card.foreground(),
          }}
        >
          Change Theme {colorScheme === 'dark' ? '🌞' : '🌚'}
        </Text>
      </Pressable>
      <MessagesList />
      <StatusBar style='auto' />
    </View>
  );
}
