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
import { SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Book from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
const book = BOOKS_MOCK[1];

const App = () => {
  return (
    <>
      <SafeAreaView>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Book Component Test</Text>
              <Book author={book.author} title={book.title} imageUrl={book.imageUrl}/>
              <Book author={book.author} title={book.title} imageUrl={book.imageUrl}/>
              <Book author={book.author} title={book.title} imageUrl={book.imageUrl}/>

            </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    height:'100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom:15,
  }
});

export default App;
