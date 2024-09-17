import { FlatList, Image, Text } from "react-native"
import { StyleSheet } from "react-native-web";

const data = [
    { id: '1', link: '../../../assets/images/cristo-vive-img/1.jpeg' },
    { id: '2', link: '../../../assets/images/cristo-vive-img/2.jpeg'}
  ];
  
  export default function CristoVive() {
    return (
      <FlatList
        data={data}
        keyExtractor={(foto) => foto.id}
        renderItem={({ foto }) => (
        <Image
        style={styles.link}
        source={{ uri: foto.link }} 
        />

        )}
      />
    );
  }
  
  const styles = StyleSheet.create({
    foto:{
    
    }
  })