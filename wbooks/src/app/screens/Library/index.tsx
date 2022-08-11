import React from "react";
import { View} from "react-native";
import style from './style';
import BookList from "@app/components/BookList";

const Library = () => {
    return (
    <View style={style.libraryContainer}>
        <BookList />
    </View>);

    
   

    

};

export  default Library;