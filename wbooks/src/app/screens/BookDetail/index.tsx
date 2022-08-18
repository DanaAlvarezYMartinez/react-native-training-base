import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, ImageSourcePropType, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { COMMENTS_MOCK } from '@constants/mockComments';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CommentList from '@app/components/CommentList';

import style from './style';

const defaultComments = COMMENTS_MOCK.slice(0, 2);
const restComments = COMMENTS_MOCK.slice(2, 5);

export type commentProps = {
  id?: number;
  author: string;
  text: string;
  url: ImageSourcePropType;
};

type BookDetailRouteProp = RouteProp<
  { params: { author: string; title: string; imageUrl: ImageSourcePropType; year: string; genre: string } },
  'params'
>;

type Props = {
  route: BookDetailRouteProp;
};

const BookDetail = ({ route }: Props) => {
  const { author, title, imageUrl, year, genre } = route.params;

  const [comments, setComments] = useState(defaultComments);
  const [notLoaded, setNotLoaded] = useState(true);
  const [viewAll, setViewAll] = useState('View All');

  const viewRest = () => {
    if (notLoaded) {
      setComments(comments.concat(restComments));
      setNotLoaded(false);
      setViewAll('View Less');
    } else {
      setComments(defaultComments);
      setNotLoaded(true);
      setViewAll('View All');
    }
  };

  return (
    <View style={style.bookDetailContainer}>
      <View style={style.whiteBox}>
        <View>
          <View style={style.infoContainer}>
            <Image source={imageUrl} style={style.img} />
            <View style={style.textContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
                  {title}
                </Text>
              </View>
              <View>
                <Text style={style.text}>{author}</Text>
                <Text style={style.text}>{year}</Text>
                <Text style={style.text}>{genre}</Text>
              </View>
            </View>
          </View>
          <View style={style.container}>
            <TouchableOpacity style={style.whiteBtn}>
              <Text style={style.whiteBtnText}>ADD TO WHISHLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.blueBtn}>
              <Text style={style.blueBtnText}>RENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={style.commentsContainer}>
        <CommentList comments={comments} />
        <TouchableHighlight onPress={viewRest} underlayColor={'#ededed'} style={style.linkContainer}>
          <View>
            <Text style={style.viewAll}>{viewAll}</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default BookDetail;
