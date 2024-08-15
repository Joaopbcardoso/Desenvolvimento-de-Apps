import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [number, onChangeText] = useState('')
  const [number2, onChangeText2] = useState('')
  const [resultado, setResultado] = useState('')

  const soma = function soma(){
      setResultado(Number(number) + Number(number2))
      return number
  }

  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>

      <TextInput
      onChangeText={onChangeText}
      value = {number} 
      placeholder='Insira o número aqui'
      keyboardType='numeric'
      />

      <TextInput
      onChangeText={onChangeText2}
      value = {number2} 
      placeholder='Insira o número aqui'
      keyboardType='numeric'
      />

      <View style={styles.buttonContainer}>
      <Button 
        title='+'
        onPress={()=> soma()}
      />

      <Button 
        title='-'
        onPress={()=> subtrai()}
      />

      <Button 
        title='X'
        onPress={()=> soma()}
      />

      <Button 
        title='÷'
        onPress={()=> soma()}
      />

      </View>

      <Text>O valor é {number} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : { 
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center' 
},
  buttonContainer : { 
    flexDirection: 'row'
}}
)

export default App;