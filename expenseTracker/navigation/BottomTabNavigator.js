import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LogsScreen from '../screens/LogsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Logs';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Charts"
        component={LogsScreen}
        options={{
          title: 'View charts',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-analytics" />,
        }}
      />
      <BottomTab.Screen
        name="Logs"
        component={LogsScreen}
        options={{
          title: 'View logged items',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list-box" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Charts':
      return 'Charts';
    case 'Logs':
      return 'Logged items';
    case 'Settings':
      return 'Settings';
  }
}
