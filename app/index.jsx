import React from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    const data = [
        { id: '1', link: './banco/Banco', titulo: 'Benvenutti Association' },
        { id: '2', link: '/calculadora/Calculadora', titulo: 'Calculadora' },
        { id: '3', link: '/lista-tarefa/Lista', titulo: 'Lista de Tarefa' },
        { id: '4', link: '/login/Login', titulo: 'Atividade do Login' },
        { id: '5', link: '/picker/Pokemon', titulo: 'App do Pokemón' },
        { id: '6', link: '/splash-screen/SplashScreen', titulo: 'Splash Screen Disney+' },
        { id: '7', link: '/sobre-mim', titulo: 'Sobre mim' },
    ];
    

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Image
                style={styles.logo}
                source={require('./desenvolvimento-de-apps.png')}
            />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link style={styles.link} href={item.link}>
                        {item.titulo}
                    </Link>
                )}
            />
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    scrollView: {
        width: '100%'
      },

    logo: {
        width: 400,
        height: 400,
    },
    link:{
        margin: 20,
        padding: 40,
        borderWidth: 1, 
        fontSize: 20,
        textAlign: "center"
    }
});
