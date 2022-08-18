import React from 'react';
import { commentProps } from '@app/screens/BookDetail';

import Comment from '../Comment';

const CommentList = ({ comments }: any) => {
  return comments.map((comment: commentProps) => (
    <Comment key={comment.id} id={comment.id} author={comment.author} text={comment.text} url={comment.url} />
  ));
};

export default CommentList;
