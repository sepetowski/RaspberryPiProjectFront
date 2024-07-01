import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ backgroundColor: '#111111', borderLeftColor: 'green' }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ backgroundColor: '#111111', borderLeftColor: 'red' }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white',
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white',
      }}
    />
  ),
};
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
      </Stack>
      <Toast config={toastConfig} />
    </>
  );
}
