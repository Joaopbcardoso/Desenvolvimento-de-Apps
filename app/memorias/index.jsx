import { View, Image, Text, SafeAreaView, StyleSheet, TextInput, FlatList, Pressable } from "react-native";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect} from "react";
import { Link } from "expo-router";


export default function memorias(){

    // useEffect(()=>{    
    //     if(lista_memorias){
    //         lista_memoria = AsyncStorage.getItem('lista_memorias')
    //     }else{
    //         lista_memoria = AsyncStorage.setItem('lista_memorias')
    //     }},[])


    return(
        <View style={styles.container}>
            <Header
                titulo={'Minhas Memórias'}
            />
            <View>
                <Link href={'./nova-memoria'}><Text>Nova Memória</Text></Link>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
