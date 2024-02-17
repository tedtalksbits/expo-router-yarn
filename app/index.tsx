import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { Text } from '@/components/ui/Text';
import { Link } from '@/components/ui/Link';
import { useToast } from '@/providers/toaster/toaster';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';
export default function LandingScreen() {
  const { toast } = useToast();
  const { themeColors } = useTheme();
  return (
    <ScreenLayout>
      <View>
        <Text variant='h1'>LandingScreen</Text>
        <Link href='/(tabs)'>Go to Home</Link>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: themeColors.success.bg(),
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            toast.success({
              title: 'Success',
              description: 'This is a success toast',
              icon: <FontAwesome name='check' />,
              action: {
                label: 'Undo',
                onPress: () => {
                  console.log('Undo');
                  toast.info({
                    title: 'Action undone',
                    description: 'Undoing action',
                    icon: <FontAwesome name='info' />,
                  });
                },
              },
            });
          }}
        >
          <Text>Show Success Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: themeColors.primary.bg(),
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            toast.info({
              title: 'Info',
              description: 'This is an info toast',
              icon: <FontAwesome name='info' />,
            });
          }}
        >
          <Text>Show Info Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: themeColors.destructive.bg(),
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            toast.destructive({
              title: 'Destructive',
              description: 'This is a destructive toast',
              icon: <FontAwesome name='times' />,
            });
          }}
        >
          <Text>Show Destructive Toast</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}
