import { View } from 'react-native';
import React from 'react';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { Text } from '@/components/ui/Text';
import { Link } from '@/components/ui/Link';
export default function LandingScreen() {
  return (
    <ScreenLayout>
      <View>
        <Text variant='h1'>LandingScreen</Text>
        <Link href='/settings'>
          <Text variant='link'>Go to index</Text>
        </Link>
        <Link href='/settings'>
          <Text variant='link'>Go to settings</Text>
        </Link>
      </View>
    </ScreenLayout>
  );
}
