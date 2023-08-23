import React from "react";
import { Text, View,Image } from "react-native";
import styles from "./ProductCard.style"

const ProductCard = props =>{
    return(    
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={styles.imageProduct} 
            source={{uri:props.product.imgURL}}/>
        </View>

        <Text style={styles.productTitle}>{props.product.title}</Text>
        <Text style={styles.productPrice}>{props.product.price}</Text>
        <Text style={styles.productInStock}>{props.product.inStock ?  "" : "STOKTA YOK"}</Text>
    </View>
    )
};
export default ProductCard;