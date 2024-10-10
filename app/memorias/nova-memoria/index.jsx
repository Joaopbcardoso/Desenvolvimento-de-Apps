import { View, Image, Text, SafeAreaView, StyleSheet, TextInput, Pressable } from "react-native";
import Header from "../../../components/Header";
import { useState } from "react";


export default function memorias(){
    const [inputTitulo, setImputTitulo] = useState('')
    const [inputQuando, setImputQuando] = useState('')
    const [inputOnde, setImputOnde] = useState('')
    const [inputDescricao, setImputDescricao] = useState('')
    const [uri, setUri] = useState('')

    const criaMemoria = () =>{

    }

    return(
        <View style={styles.container}>
            <Header
                titulo={'Nova Memória'}
            />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value= {inputTitulo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quando aconteceu? (ano)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Onde aconteceu? (onde)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Breve descrição"
                />
                <View>
                    <Text>Adicionar Imagem</Text>
                </View>
                <Pressable
                    onPress={criaMemoria}
                >
                    <Text>Salvar Memória</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    input:{
        backgroundColor: '#CCC',
        margin: 20,
        padding: 10,
        borderRadius: 10,
    }
})
