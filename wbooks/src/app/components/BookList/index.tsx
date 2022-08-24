import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Book from '@app/components/Book';
import { bookProps } from '@app/components/AppNavigator';
import { useSelector } from 'react-redux';

import style from './style';

const BookList = () => {
  const renderItem = ({ item }: { item: bookProps }) => {
    return (
      <Book
        author={item.author}
        title={item.title}
        imageUrl={item.imageUrl}
        year={item.year}
        genre={item.genre}
      />
    );
  };

  const books = useSelector(state => state.bookList);

  return (
    <View style={style.bookListContainer}>
      <Text>Hola</Text>
      <FlatList data={books} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
};

export default BookList;
