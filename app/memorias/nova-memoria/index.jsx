import { View, Image, Text, SafeAreaView, StyleSheet, TextInput, Pressable, Button } from "react-native";
import Header from "../../../components/Header";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewMemory() {
  const [data, setData] = useState({
    title: '',
    when: '',
    where: '',
    description: '',
    image: ''
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setData({
        ...data,
        image: result.assets[0].uri
      });
    }
  };

  const saveMemory = async () => {
    try {
      const existingMemories = await AsyncStorage.getItem('memories');
      const memoriesArray = existingMemories ? JSON.parse(existingMemories) : [];
      memoriesArray.push(data);
      await AsyncStorage.setItem('memories', JSON.stringify(memoriesArray));
      navigation.navigate('MemoryList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Nova Memória'}
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={data.title}
          onChangeText={text => setData({ ...data, title: text })}
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Quando aconteceu? (ano)"
          value={data.when}
          onChangeText={text => setData({ ...data, when: text })}
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Onde aconteceu? (onde)"
          value={data.where}
          onChangeText={text => setData({ ...data, where: text })}
          required
        />
        <TextInput
          style={styles.input}
          placeholder="Breve descrição"
          value={data.description}
          onChangeText={text => setData({ ...data, description: text })}
          required
        />
        <View>
          <View style={styles.gallery}>
            <Button title="Pegar Imagem da Galeria " onPress={pickImage} style={styles.botaogaleria} />
            {data.image && <Image source={{ uri: data.image }} style={styles.image} />}
          </View>
        </View>
        <Pressable
          onPress={saveMemory}
        >
          <Text>Salvar Memória</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: '#CCC',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  gallery: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaogaleria: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
  },
});