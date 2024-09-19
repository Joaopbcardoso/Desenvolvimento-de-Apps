import { FlatList, Image, Text, StyleSheet, View } from 'react-native';
import HeaderSobre from '../../../components/HeaderSobre';

const data = [
  { id: '1', link: require('../../../assets/images/bc.jpeg'), descricao: 'Bauneário Camburiú' },
  { id: '2', link: require('../../../assets/images/jeep.jpeg'), descricao: 'Cambará do Sul' },
  { id: '3', link: require('../../../assets/images/trem.jpeg'), descricao: 'Morretes -> Curitiba'},
];

export default function Viagens() {
  return (
    <>
    <HeaderSobre
    titulo = 'Viagens'
    />
    <FlatList
      style={styles.flatList}
      data={data}
      keyExtractor={(item) => item.id} // Use item for consistency
      renderItem={({ item }) => (
        <View>
        <Image
          style={styles.image} // Use a more descriptive style name
          source={item.link}
        />
        <Text style={styles.descricao}>{item.descricao}</Text>
        </View>

      )}
    />
    </>
  );
}

const styles = StyleSheet.create({

  flatList:{
    display: 'flex',
    width: '100%',
    
  },

  image: {
    margin: 20,
    width: 350,
    height: 600
  },

  descricao:{
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 30
  }
});
