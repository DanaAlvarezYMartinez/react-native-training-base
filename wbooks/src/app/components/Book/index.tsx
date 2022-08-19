import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, bookProps } from '@app/index';

import style from './style';

type BookDetailProp = NativeStackNavigationProp<RootStackParamList, 'BookDetail'>;

const Book = ({ author, title, imageUrl, year, genre }: bookProps) => {
  const navigation = useNavigation<BookDetailProp>();

  const redirectNavigation = () =>
    navigation.navigate('BookDetail', { author, title, imageUrl, year, genre });

  return (
    <TouchableOpacity style={style.bookContainer} onPress={redirectNavigation}>
      <Image source={imageUrl} style={style.img} />

      <View style={style.bookInfoContainer}>
        <Text style={style.bookTitle}>{title}</Text>
        <Text style={style.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
