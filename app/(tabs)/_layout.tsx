import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#555555',
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'FancyLight',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="authors"
        options={{
          title: 'Authors',
          tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
        }}
      />
    </Tabs>
  );
}
