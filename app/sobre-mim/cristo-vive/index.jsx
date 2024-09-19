import { FlatList, Image, Text, StyleSheet, View } from 'react-native';
import HeaderSobre from '../../../components/HeaderSobre';

const data = [
  { id: '1', link: require('../../../assets/images/aurora.jpeg'), descricao: 'Acampamento Regional (Aurora)' },
  { id: '2', link: require('../../../assets/images/metobc.jpeg'), descricao: 'Igreja Metodista em Bauneário Camburiú' },
  { id: '3', link: require('../../../assets/images/meto-morretes.jpeg'), descricao: 'Igreja Metodista em Morretes-PR'},
  { id: '4', link: require('../../../assets/images/meto-curitiba.jpeg'), descricao: 'Igreja Metodista Central de Curitiba'},
  { id: '5', link: require('../../../assets/images/teclado.jpeg'), descricao: 'Igreja Metodista no Estreito'},
  { id: '6', link: require('../../../assets/images/violao.jpeg'), descricao: 'Igreja Metodista no Estreito'},
];

export default function CristoVive() {
  return (
    <>
    <HeaderSobre
    titulo = 'Cristo Vive ✞'
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
    marginBottom: 20
  }
});
