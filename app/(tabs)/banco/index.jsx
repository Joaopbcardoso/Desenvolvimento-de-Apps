import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image, Modal, Alert } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(7320.92);
    const [valor, setValor] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [operationType, setOperationType] = useState('');

    const operacao = (type) => {
        const multaOuBonus = type === 'sacar' ? 1.025 : 1.01;
        const valorComMulta = Number(valor) * multaOuBonus;
        const novoSaldo = type === 'sacar' ? Number(number) - valorComMulta : Number(number) + valorComMulta;

        setNumber(novoSaldo);
        setIsModalOpen(false); 
    };

    const openModal = (type) => {
        setOperationType(type);
        setIsModalOpen(true);
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
                <Pressable onPress={() => openModal('sacar')}><Text style={styles.botao}>Sacar</Text></Pressable>
                <Pressable onPress={() => openModal('depositar')}><Text style={styles.botao}>Depositar</Text></Pressable>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalOpen}
              onRequestClose={() => {
                Alert.alert('A modal foi fechada');
                setIsModalOpen(!isModalOpen);
              }}>
              <View style={styles.centraliza}>
                <View style={styles.modal}>
                  <Pressable 
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setIsModalOpen(!isModalOpen)}><Text>X</Text></Pressable>
                  <Text>Valor Atual: R${number.toFixed(2)}</Text>
                  <Text>Valor Final: R${(operationType === 'sacar' ? number - (Number(valor) * 1.025) : number + (Number(valor) * 1.01)).toFixed(2)}</Text>
                  <Text>Tem certeza que deseja {operationType === 'sacar' ? 'sacar' : 'depositar'}?</Text>
                  <View style={styles.alinha}> 
                  <Pressable 
                    onPress={() => operacao(operationType)}><Text style={styles.confirm}>Sim</Text></Pressable>
                  <Pressable 
                    onPress={() => setIsModalOpen(false)}><Text style={styles.confirm}>Não</Text></Pressable>
                  </View>
                </View>
              </View>
          </Modal>
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
        marginBottom: 0
    },
    saldo: {
        margin: 20
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
    },

    centraliza: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },

    modal: {
      margin: 20,
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 6,
      },
      shadowOpacity: 0.60,
      shadowRadius: 4,
      elevation: 5,
    },

    buttonClose: {
        alignSelf: 'flex-end',
        fontSize: 10,
        marginBottom: 20,
        
    },

    confirm: {
      backgroundColor: '#1891C8',
      marginTop: 25,
      marginHorizontal: 10,
      width: 50,
      borderRadius: 2,
      color: '#FFF', 
      textAlign: 'center',
      padding: 2
    }
});

export default App;
