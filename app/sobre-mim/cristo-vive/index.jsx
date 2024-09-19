import { FlatList, Image, Text, StyleSheet } from 'react-native';
import HeaderSobre from '../../../components/HeaderSobre';

const data = [
  { id: '1', link: require('../../../assets/images/aurora.jpeg') },
  { id: '2', link: require('../../../assets/images/metobc.jpeg') },
  { id: '3', link: require('../../../assets/images/meto-morretes.jpeg')},
  { id: '4', link: require('../../../assets/images/meto-curitiba.jpeg')},
  { id: '5', link: require('../../../assets/images/teclado.jpeg')},
  { id: '6', link: require('../../../assets/images/violao.jpeg')},
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
        <Image
          style={styles.image} // Use a more descriptive style name
          source={item.link}
        />
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
});
