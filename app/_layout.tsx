import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            statusBarColor: '#111111',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            statusBarColor: '#111111',
            headerStyle: { backgroundColor: '#111111' },
            contentStyle: { backgroundColor: '#222222' },
            headerTitleAlign: 'center',
            headerTintColor: '#ffff',
            headerTitle: 'Created by',
          }}
        />
      </Stack>
    </>
  );
}
