import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import style from './style';

export type Props = {
  author: string;
  title: string;
  imageUrl: ImageSourcePropType;
};

const Book = ({ author, title, imageUrl }: Props) => {
  return (
    <View style={style.bookContainer}>
      <Image source={imageUrl} style={style.img} />

      <View style={style.bookInfoContainer}>
        <Text style={style.bookTitle}>{title}</Text>
        <Text style={style.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
};

export default Book;
