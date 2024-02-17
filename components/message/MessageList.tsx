import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@/hooks/useTheme';
import { Link } from '../ui/Link';
interface Message {
  id: string;
  name: string;
  message: string;
  isRead: boolean;
  isTrash: boolean;
  isFavorite: boolean;
}
const messagesData: Message[] = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey, how are you?',
    isRead: true,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Jane Doe',
    message: 'Meeting tomorrow?',
    isRead: false,
    isTrash: false,
    isFavorite: true,
  },
  {
    id: '3',
    name: 'James Doe',
    message: 'New product is launched!',
    isRead: true,
    isTrash: true,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Jill Doe',
    message: 'You have won a lottery!',
    isRead: false,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Jack Doe',
    message: 'Hey, how are you?',
    isRead: true,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Jasmine Doe',
    message: 'Meeting tomorrow?',
    isRead: false,
    isTrash: false,
    isFavorite: true,
  },
  {
    id: '7',
    name: 'Jasper Doe',
    message: 'New product is launched!',
    isRead: true,
    isTrash: true,
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Jade Doe',
    message: 'You have won a lottery!',
    isRead: false,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '9',
    name: 'John Doe',
    message: 'Hey, how are you?',
    isRead: true,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '10',
    name: 'Jane Doe',
    message: 'Meeting tomorrow?',
    isRead: false,
    isTrash: false,
    isFavorite: true,
  },
  {
    id: '11',
    name: 'James Doe',
    message: 'New product is launched!',
    isRead: true,
    isTrash: true,
    isFavorite: false,
  },
  {
    id: '12',
    name: 'Jill Doe',
    message: 'You have won a lottery!',
    isRead: false,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '13',
    name: 'Jack Doe',
    message: 'Hey, how are you?',
    isRead: true,
    isTrash: false,
    isFavorite: false,
  },
  {
    id: '14',
    name: 'Jasmine Doe',
    message: 'Meeting tomorrow?',
    isRead: false,
    isTrash: false,
    isFavorite: true,
  },
];

const MessagesList = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { themeColors } = useTheme();
  const { primary, secondary, background, foreground, border } = themeColors;

  const toggleSelect = (id: string) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const isSelected = (id: string) => selectedIds.includes(id);
  const isAllSelected = () => selectedIds.length === messagesData.length;

  return (
    <View className='flex-1'>
      <View className='heading p-3'>
        <Text
          className='font-bold text-2xl'
          style={{
            color: foreground(),
          }}
        >
          Messages
        </Text>
      </View>
      <ScrollView>
        {messagesData.map((message) => (
          <View
            key={message.id}
            className='flex flex-row p-4 border-b rounded-2xl'
            style={{
              backgroundColor: isSelected(message.id)
                ? primary.bg(0.5)
                : 'transparent',
              borderColor: border(),
            }}
          >
            <TouchableOpacity onPress={() => toggleSelect(message.id)}>
              <View className='flex-1 mr-2'>
                <Ionicons
                  name={isSelected(message.id) ? 'checkmark-circle' : 'ellipse'}
                  size={48}
                  color={
                    isSelected(message.id)
                      ? primary.foreground()
                      : secondary.bg()
                  }
                />
              </View>
            </TouchableOpacity>
            <View className='flex-1'>
              <Link
                href={{
                  pathname: '/messages/[id]',
                  params: { id: message.id },
                }}
              >
                <View>
                  <Text
                    className='font-bold mb-2'
                    style={{
                      color: isSelected(message.id)
                        ? primary.foreground()
                        : foreground(),
                    }}
                  >
                    {message.name}
                  </Text>
                  <Text
                    style={{
                      color: isSelected(message.id)
                        ? primary.foreground()
                        : foreground(),
                    }}
                  >
                    {message.message}
                  </Text>
                </View>
              </Link>
            </View>
          </View>
        ))}
      </ScrollView>
      {selectedIds.length > 0 && (
        <View className='p-5'>
          <View className='flex flex-row items-center justify-between p-3 rounded-2xl bg-primary'>
            <Text
              className='font-bold flex items-baseline'
              style={{
                color: foreground(),
              }}
              onPress={() => {
                setSelectedIds([]);
              }}
            >
              <Ionicons name='arrow-back' size={24} color={foreground()} />{' '}
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                {selectedIds.length} selected
              </Text>
            </Text>
            <Text
              className='font-bold'
              onPress={() => {
                setSelectedIds(
                  isAllSelected()
                    ? []
                    : messagesData.map((message) => message.id)
                );
              }}
              style={{
                color: foreground(),
              }}
            >
              {isAllSelected() ? 'Deselect All' : 'Select All'}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default MessagesList;
