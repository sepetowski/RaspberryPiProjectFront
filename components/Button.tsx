import React, { forwardRef } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  buttonClass?: string;
  textClass?: string;
  isLoading?: boolean;
  color?: string;
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ onPress, title, buttonClass, textClass, isLoading, color }, ref) => {
    return (
      <TouchableOpacity
        style={[color ? { backgroundColor: color } : null]}
        disabled={isLoading}
        ref={ref}
        className={`flex min-h-10 items-center justify-center rounded-md bg-primary px-4 py-2   disabled:bg-primary/70 ${buttonClass}   `}
        onPress={onPress}>
        {isLoading ? (
          <View className="flex flex-row items-center justify-center gap-2">
            <Text className="text-white">Please wait</Text>
            <ActivityIndicator className="  text-white " />
          </View>
        ) : (
          <Text className={`text-lg font-bold ${textClass}`}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
);
