/* eslint-disable no-use-before-define */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import settingsIcon from '@assets/ic_settings.png';
import settingsIconActive from '@assets/ic_settings_active.png';
import libraryIcon from '@assets/ic_library.png';
import libraryIconActive from '@assets/ic_library_active.png';
import { btn, iconGray } from '@constants/colors';

import AppNavigator from './components/AppNavigator';

const Tab = createBottomTabNavigator();

const LibraryTab = () => {
  return <AppNavigator />;
};

const SettingsTab = () => {
  return (
    <View>
      <Text>Hi settings screen :) </Text>
    </View>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let icon = null;

              if (route.name === 'LibraryTab') {
                icon = focused ? libraryIconActive : libraryIcon;
              } else if (route.name === 'SettingsTab') {
                icon = focused ? settingsIconActive : settingsIcon;
              }

              // You can return any component that you like here!
              return <Image source={icon} />;
            },
            tabBarActiveTintColor: btn,
            tabBarInactiveTintColor: iconGray
          })}>
          <Tab.Screen
            name="LibraryTab"
            component={LibraryTab}
            options={{
              headerShown: false,
              title: 'Library'
            }}
          />
          <Tab.Screen
            name="SettingsTab"
            component={SettingsTab}
            options={{
              title: 'Settings'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
