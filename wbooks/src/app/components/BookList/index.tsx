import React from 'react';
import { View, FlatList } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@app/components/Book';
import { bookProps } from '@app/index';

import style from './style';

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

const BookList = () => {
  return (
    <View style={style.bookListContainer}>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
};

export default BookList;
