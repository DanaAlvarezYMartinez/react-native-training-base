import React from 'react';
import { Image, Text, View } from 'react-native';
import { commentProps } from '@app/screens/BookDetail';

import style from './style';

const Comment = ({ name, comment, iconUrl }: commentProps) => {
  return (
    <View style={style.commentContainer}>
      <Image source={iconUrl} style={style.icomImg} />
      <View style={style.textContainer}>
        <Text style={style.userName}>{name}</Text>
        <View style={style.commentWrapper}>
          <Text style={style.comment}>{comment}</Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
