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
import { SafeAreaView, View } from 'react-native';
import Book from '@app/components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

import style from './style';

const book = BOOKS_MOCK[1];

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={style.sectionContainer}>
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
