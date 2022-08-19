import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import background from '@assets/bc_nav_bar.png';
import back from '@assets/ic_back.png';

import style from './style';
// import { useNavigation } from '@react-navigation/core';
// import { RootStackParamList } from '@app/index';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type headerProp = {
  nameScreen: string;
  backScreen: string;
};

const Header = ({ route }) => {
  const navigation = useNavigation();
  // Mi idea es pasarle el nombre de la pantalla a la que quiero que vuelva,
  // entonces onPress hago el navigate y listo, queda andando

  // tendria que agregar otra prop que sea hasBackScreen o algo asi, para esconder la flechita si no es necesario.
  // algo como hide o algo asi

  // type ScreenProp = NativeStackNavigationProp<RootStackParamList, {backscreen}>;
  // const navigation = useNavigation<ScreenProp>();

  // const redirectNavigation = () =>
  //  navigation.navigate({backScreen});

  const handlePressGoBack = () => navigation.goBack();

  return (
    <ImageBackground source={background} resizeMode="cover" style={style.background}>
      <View style={style.container}>
        {route.name !== 'Library' && (
          <TouchableOpacity onPress={handlePressGoBack}>
            <Image source={back} />
          </TouchableOpacity>
        )}
        <Text style={style.title}>{'nameScreen'}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
