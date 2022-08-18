import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import style from './style';

type BookDetailRouteProp = RouteProp<
  { params: { author: string; title: string; imageUrl: ImageSourcePropType; year: string; genre: string } },
  'params'
>;

type Props = {
  route: BookDetailRouteProp;
};

const BookDetail = ({ route }: Props) => {
  const { author, title, imageUrl, year, genre } = route.params;

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
    </View>
  );
};

export default BookDetail;
