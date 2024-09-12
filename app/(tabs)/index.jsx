import React from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native"

export default function Home(){
    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('./desenvolvimento-de-apps.png')}
            />
            <FlatList
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center'
    },

    logo : {
        width: 400,
        height: 400
    }
})