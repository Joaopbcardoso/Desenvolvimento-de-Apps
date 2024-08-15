import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    quadro:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#3E7043',
        width: 500,
        borderRadius: 10
    },

    logo: {
        width: 200,
        height: 250
    },

    lista: {
        color: "#FFF",
        margin: 30
    },

    item_concluido: {
        color: "#FFF",
        margin: 5,
        textDecorationLine: 'line-through' // Adiciona uma linha para itens concluídos
    },

    item_a_fazer: {
        color: "#FFF",
        margin: 5
    },

    check: {
        backgroundColor: '#FFF',
        width: 20,
        height: 20
    },

    item_botao: {
        display: 'flex',
        width: 300,
        justifyContent: 'space-around'
    }
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      titulo: 'Fazer calculadora2 em React native',
      feito: false
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      titulo: 'Fazer Lista de Tarefas',
      feito: false
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      titulo: 'Escolher Músicas Para Tocar Em BC',
      feito: false
    },
];

export default listaTarefa = () => {
    return (
        <View style={styles.container}>
            <View style={styles.quadro}>
                <Image 
                    style={styles.logo}
                    source={require('./img/lista-logo.png')}
                />
                <FlatList
                    style={styles.lista}
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.item_botao}>
                        <Text style={item.feito ? styles.item_concluido : styles.item_a_fazer}>
                            {item.titulo}
                        </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};