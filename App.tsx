import {
  Appearance,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import './index.css';
import { useTheme } from './hooks/useTheme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const { toggleTheme, colorScheme, themeClass } = useTheme();

  return (
    <View className='flex-1 items-center justify-center dark:bg-slate-800'>
      <Pressable
        onPress={toggleTheme}
        className='p-4 rounded-[20px] my-3  dark:bg-dark-background bg-light-background items-center border'
      >
        <Text className='dark:text-black'>
          Change Theme {colorScheme === 'dark' ? '🌞' : '🌚'}
        </Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
}
