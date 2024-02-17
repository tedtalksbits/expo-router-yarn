import { Pressable, View } from 'react-native';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { Text } from '@/components/ui/Text';
import { useTheme } from '@/hooks/useTheme';

export default function Settings() {
  const { toggleTheme, colorScheme, themeColors } = useTheme();
  const { card, border } = themeColors;
  return (
    <ScreenLayout>
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
      </View>
    </ScreenLayout>
  );
}
