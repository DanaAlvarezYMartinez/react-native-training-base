import React from 'react';
import { Image, Text, View } from 'react-native';
import { commentProps } from '@app/screens/BookDetail';

import style from './style';

const Comment = ({ id, author, text, url }: commentProps) => {
  return (
    <View style={style.commentContainer} nativeID={String(id)}>
      <Image source={url} style={style.icomImg} />
      <View style={style.textContainer}>
        <Text style={style.userName}>{author}</Text>
        <View style={style.commentWrapper}>
          <Text style={style.comment}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
