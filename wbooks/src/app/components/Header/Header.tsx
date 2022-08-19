import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
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

const Header = ({ nameScreen, backScreen }: headerProp) => {
  // Mi idea es pasarle el nombre de la pantalla a la que quiero que vuelva,
  // entonces onPress hago el navigate y listo, queda andando

  // tendria que agregar otra prop que sea hasBackScreen o algo asi, para esconder la flechita si no es necesario.
  // algo como hide o algo asi

  // type ScreenProp = NativeStackNavigationProp<RootStackParamList, {backscreen}>;
  // const navigation = useNavigation<ScreenProp>();

  // const redirectNavigation = () =>
  //  navigation.navigate({backScreen});

  const redirectNavigation = () => console.log('backScreen', backScreen);

  return (
    <ImageBackground source={background} resizeMode="cover" style={style.background}>
      <View style={style.container}>
        <TouchableOpacity onPress={redirectNavigation}>
          <Image source={back} />
        </TouchableOpacity>
        <Text style={style.title}>{nameScreen}</Text>
      </View>
    </ImageBackground>
  );
};

export default Header;
