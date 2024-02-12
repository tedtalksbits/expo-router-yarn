import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import ScreenLayout from '@/components/layouts/ScreenLayout';

export default function ModalScreen() {
  return (
    <ScreenLayout>
      <View>
        <Link href='/settings'>
          <Text>Go to settings</Text>
        </Link>
      </View>
    </ScreenLayout>
  );
}
