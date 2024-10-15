import { View, Image, Text, StyleSheet, TextInput, FlatList, Pressable } from "react-native";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

export default function MemoryList() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const loadMemories = async () => {
      try {
        const existingMemories = await AsyncStorage.getItem('memories');
        const memoriesArray = existingMemories ? JSON.parse(existingMemories) : [];
        setMemories(memoriesArray);
      } catch (error) {
        console.error(error);
      }
    };
    loadMemories();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        titulo='Minhas Memórias'
      />
      <View>
        <Link href={'./nova-memoria'}><Text>Nova Memória</Text></Link>
        <FlatList
          data={memories}
          renderItem={({ item }) => (
            <View style={styles.memoryItem}>
              <Text>{item.title}</Text>
              <Text>{item.when}</Text>
              <Text>{item.where}</Text>
              <Text>{item.description}</Text>
              {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  memoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: 200,
    height: 200,
  },
});