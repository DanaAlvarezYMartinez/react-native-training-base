import React from "react";
import { View, FlatList, Text } from "react-native";
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book, { Props } from '@components/Book';
import style from "./style";

const renderItem = ({ item }:{item:Props}) => {
    return <Book author={item.author} title={item.title} imageUrl={item.imageUrl}/>
}

const BookList = () => {
    return (
    <View style={style.bookListContainer}>
        <FlatList 
            data={BOOKS_MOCK}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}
        />
    </View>);
};

export default BookList;