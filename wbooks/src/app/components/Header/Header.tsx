import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import background from '@assets/bc_nav_bar.png';
import back from '@assets/ic_back.png';

import style from './style';

const Header = ({ route }: any) => {
  const navigation = useNavigation();
  const handlePressGoBack = () => navigation.goBack();

  return (
    <ImageBackground source={background} resizeMode="cover" style={style.background}>
      {route.name === 'Library' ? (
        <View style={style.libraryContainer}>
          <Text style={style.title}>{route.name}</Text>
        </View>
      ) : (
        <View style={style.container}>
          {route.name !== 'Library' && (
            <TouchableOpacity onPress={handlePressGoBack}>
              <Image source={back} />
            </TouchableOpacity>
          )}
          <Text style={style.title}>{route.name}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default Header;
