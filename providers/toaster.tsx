import { Text } from '@/components/ui/Text';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

type ToastType = 'info' | 'success' | 'warning' | 'destructive';

interface Toast {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  type: ToastType;
}

interface ToastContextData {
  addToast(toast: Omit<Toast, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  const { addToast, removeToast } = context;

  const toast = {
    success: ({ title, description, icon }: Omit<Toast, 'id' | 'type'>) =>
      addToast({ title, description, icon, type: 'success' }),
    info: ({ title, description, icon }: Omit<Toast, 'id' | 'type'>) =>
      addToast({ title, description, icon, type: 'info' }),
    warning: ({ title, description, icon }: Omit<Toast, 'id' | 'type'>) =>
      addToast({ title, description, icon, type: 'warning' }),
    destructive: ({ title, description, icon }: Omit<Toast, 'id' | 'type'>) =>
      addToast({ title, description, icon, type: 'destructive' }),
  };

  return { toast, removeToast };
};

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [offset, setOffset] = useState(40);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    // limit toasts to 3
    if (toasts.length >= 3) {
      removeToast(toasts[0].id);
    }
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <View>
        {toasts.map((toast, i) => (
          <Toast
            key={toast.id}
            toast={toast}
            offset={offset + i * (TOAST_HEIGHT - 40)}
            index={i}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
};

// Toast component
const Toast = ({
  toast,
  offset,
  index,
}: {
  toast: Toast;
  offset?: number;
  index: number;
}) => {
  const [animation] = useState(new Animated.Value(0)); // initial value for opacity: 0
  const { type, title, description, icon } = toast;
  const { removeToast } = useToast();
  const { themeColors } = useTheme();
  const { foreground, primary, success, destructive } = themeColors;
  const bgClassName = {
    info: primary.bg(offset),
    success: success.bg(offset),
    warning: '#FFA500',
    destructive: destructive.bg(offset),
  }[type];

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.sequence([
      // Step 1: Fade in and slide up
      Animated.parallel([
        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [animation, removeToast, toast.id]);

  // Step 2: Fade out after 5 seconds
  setTimeout(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      removeToast(toast.id);
    });
  }, 5000);

  // Calculate the Y position for slide animation
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0], // Slide up from 20 to 0
  });

  return (
    <Animated.View
      style={[
        styles.base,
        {
          backgroundColor: bgClassName,
          bottom: offset,
          opacity: animation,
          transform: [{ translateY }], // Bind translateY to animated value
        },
      ]}
    >
      <View style={styles.contentContainer}>
        <View style={{ flexDirection: 'row' }}>
          {icon && <Text style={styles.iconContainer}>{icon}</Text>}
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      {/* close button */}
      <View
        style={styles.iconContainer}
        onTouchStart={() => {
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            removeToast(toast.id);
          });
        }}
      >
        <Text>
          <FontAwesome
            name='times'
            size={20}
            color={foreground()}
            style={{ padding: 10 }}
          />
        </Text>
      </View>
    </Animated.View>
  );
};
const TOAST_WIDTH = 340;
const TOAST_INNER_PADDING = 20;
const TOAST_HEIGHT = 50 + TOAST_INNER_PADDING * 2;
const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    bottom: 40,
    left: Dimensions.get('window').width / 2 - TOAST_WIDTH / 2, // center toast horizontally by dividing screen width by 2 and subtracting half of toast width
    flexDirection: 'row',
    height: TOAST_HEIGHT,
    width: TOAST_WIDTH,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  contentContainer: {
    paddingHorizontal: 25,
    paddingVertical: TOAST_INNER_PADDING,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,

    width: '100%',
  },
  description: {
    fontSize: 14,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export { ToastProvider };
