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
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import settingsIcon from '@assets/ic_settings.png';
import settingsIconActive from '@assets/ic_settings_active.png';
import libraryIcon from '@assets/ic_library.png';
import libraryIconActive from '@assets/ic_library_active.png';
import { btn, iconGray } from '@constants/colors';

import Header from './components/Header/Header';

export interface bookProps {
  author: string;
  title: string;
  imageUrl: ImageSourcePropType;
  year: string;
  genre: string;
}

export type RootStackParamList = {
  Library: undefined;
  BookDetail: { author: string; title: string; imageUrl: ImageSourcePropType; year: string; genre: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const LibraryTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          header: props => <Header {...props} />
        }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          header: props => <Header {...props} />
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsTab = () => {
  return (
    <View>
      <Text>Holi, settings screen!</Text>
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
