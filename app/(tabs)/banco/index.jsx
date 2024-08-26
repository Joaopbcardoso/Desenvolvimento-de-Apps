import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
    const [number, onChangeText] = useState(7320.92);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const sacar = () => {
    //     input = document.querySelector('#value')
    //     onChangeText = number(number - input)
    // }

    return (
        <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('./img/benventti-association.png')}
                />
                <Text style={styles.saldo}>Saldo : {number}</Text>
                <View style={styles.alinha}>
                <Image 
                    style={styles.money}
                    source={require('./img/money.png')}
                />
                <TextInput
                    id='value' 
                    keyboardType='numeric'
                    style={styles.input}
                    placeholder='Digite o Valor'
                />
            </View>
            <View style={styles.options}>
                <Pressable><Text style={styles.botao}>Sacar</Text></Pressable>
                <Pressable><Text style={styles.botao}>Depositar</Text></Pressable>
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
  saldo:{
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
