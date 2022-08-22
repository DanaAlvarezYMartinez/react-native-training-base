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
import { ImageSourcePropType } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';

import Header from '../Header/Header';

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

const AppNavigator = () => {
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

export default AppNavigator;