import React, { useEffect } from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';
import { useDispatch } from 'react-redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

import style from './style';

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_BOOKS', data: BOOKS_MOCK });
  });

  return (
    <View style={style.libraryContainer}>
      <BookList />
    </View>
  );
};

export default Library;
