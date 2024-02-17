import { View, Text } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';

export default function MessageLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='[id]'
        options={{
          title: 'Message Details',
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name='modal' options={{ presentation: 'modal' }} /> */}
    </Stack>
  );
}
