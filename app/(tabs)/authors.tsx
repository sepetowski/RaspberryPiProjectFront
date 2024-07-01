/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Settings() {
  return (
    <>
      <Stack.Screen options={{ title: 'Authors' }} />
      <View className="  flex-1 items-center justify-center gap-2 bg-background  ">
        <Text style={{ fontSize: 24 }} className=" text-primary ">
          Patryk Taraszkiewicz
        </Text>
        <Text style={{ fontSize: 24 }} className=" text-primary">
          Jakub Sepetowski
        </Text>
        <Text style={{ fontSize: 24 }} className=" text-primary">
          Bartłomiej Kędroń
        </Text>
      </View>
    </>
  );
}
