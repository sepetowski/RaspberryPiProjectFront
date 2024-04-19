import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Settings() {
  return (
    <>
      <Stack.Screen options={{ title: 'Settings' }} />
      <View className="flex-1  items-center justify-center bg-background">
        <Text className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit aperiam repudiandae
          atque alias odio obcaecati recusandae optio, natus minus.
        </Text>
      </View>
    </>
  );
}
