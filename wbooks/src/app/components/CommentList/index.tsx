import React from 'react';
import { View, FlatList } from 'react-native';
import { commentProps } from '@app/screens/BookDetail';

import Comment from '../Comment';

const renderItem = ({ item }: { item: commentProps }) => {
  return <Comment id={item.id} author={item.author} text={item.text} url={item.url} />;
};

const CommentList = ({ comments }: any) => {
  return (
    <View>
      <FlatList data={comments} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
};

export default CommentList;
