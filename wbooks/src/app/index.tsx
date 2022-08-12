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
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Book from '@app/components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { black } from '@constants/colors';
import { defaultSpace } from '@constants/constants';

const book = BOOKS_MOCK[1];

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
          <Book author={book.author} title={book.title} imageUrl={book.imageUrl} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: defaultSpace,
    paddingHorizontal: defaultSpace,
    backgroundColor: black,
    height: '100%'
  }
});

export default App;
