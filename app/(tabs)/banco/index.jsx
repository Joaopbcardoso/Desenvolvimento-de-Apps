import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(7320.92);
    const [valor, setValor] = useState('');

    const sacar = () => {
        const valorComMulta = Number(valor) * 1.025; // Aplica 2,5% de multa
        const novoSaldo = Number(number) - valorComMulta;
        setNumber(novoSaldo);
    };

    const depositar = () => {
      const valorComMulta = Number(valor) * 1.01; // Aplica 2,5% de multa
      const novoSaldo = Number(number) + valorComMulta;
      setNumber(novoSaldo);
  };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('./img/benventti-association.png')}
            />
            <Text style={styles.saldo}>Saldo: R${number.toFixed(2)}</Text>
            <View style={styles.alinha}>
                <Image 
                    style={styles.money}
                    source={require('./img/money.png')}
                />
                <TextInput
                    id='value' 
                    value={valor}
                    keyboardType='numeric'
                    style={styles.input}
                    placeholder='Digite o Valor'
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.options}>
                <Pressable onPress={sacar}><Text style={styles.botao}>Sacar</Text></Pressable>
                <Pressable onPress={depositar}><Text style={styles.botao}>Depositar</Text></Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    saldo: {
        margin: 30
    },

    alinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 20 
    },

    input: {
        width: 200,
        marginLeft: 10 
    },

    options: {
        display: 'flex',
        justifyContent: 'space-around'
    },

    money: {
        width: 20,
        height: 20
    },

    botao: {
        backgroundColor: '#1891C8',
        borderRadius: 1,
        textAlign: 'center',
        padding: 5,
        color: '#FFF', 
        width: 150,
        margin: 10
    }
});

export default App;
