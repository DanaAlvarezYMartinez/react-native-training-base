import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';

export interface Props {
  author: string;
  title: string;
  imageUrl?: any;
}

const Book: React.FC<Props> = ({ author, title, imageUrl }) => {
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
