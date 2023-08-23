import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin:7.5,
        backgroundColor:"#fffe4c",
        borderRadius:15,
    },
    imageView:{
        padding:7.5,
    },
    imageProduct:{
        height: 160,
        width:165,
        borderRadius:10 
    },
    productTitle:{
        fontSize:18,
        fontFamily:"Helvetica",
        fontWeight:"bold",
        color:"#240046",
        width:170,
        paddingLeft:7,
        paddingRight:7,
    },
    productPrice:{
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:7,
        paddingRight:7,
        color:"#555b6e",
    },
    productInStock:{
        fontSize:15,
        fontWeight:"bold",
        color:"#f72585",
        paddingLeft:7,
        paddingRight:7,
        fontFamily:"Helvetica",
        marginBottom:7
    },
});