import React from 'react';
import { View, FlatList } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book, { Props } from '@app/components/Book';

import style from './style';

const renderItem = ({ item }: { item: Props }) => {
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
