import React from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';

import style from './style';

const Library = () => {
  return (
    <View style={style.libraryContainer}>
      <BookList />
    </View>
  );
};

export default Library;
