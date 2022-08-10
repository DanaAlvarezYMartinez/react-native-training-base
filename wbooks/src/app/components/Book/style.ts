import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    bookContainer:{
        display:'flex',
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:8,
        paddingVertical:15,
        paddingHorizontal:30,
        height:90,
        alignItems:'center',
        marginVertical:5,
    },
    bookInfoContainer:{
        flex:1,
        flexDirection:'column',
        marginLeft:15,
    },
    bookTitle:{
        fontSize:17,
        color:'#4a4a4a',
        fontWeight:'700',
    },
    bookAuthor:{
        fontSize:15,
        color:'#4a4a4a',
        fontWeight:'400',
    },
    img:{
        width:40,
        height:60,
    }
});

export default style;