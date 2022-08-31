import React, { useEffect } from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../../../redux/Book/actions';

import style from './style';

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <View style={style.libraryContainer}>
      <BookList />
    </View>
  );
};

export default Library;
