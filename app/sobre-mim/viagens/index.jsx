import { FlatList, Image, Text, StyleSheet } from 'react-native';
import HeaderSobre from '../../../components/HeaderSobre';

const data = [
  { id: '1', link: require('../../../assets/images/bc.jpeg') },
  { id: '2', link: require('../../../assets/images/jeep.jpeg') },
  { id: '3', link: require('../../../assets/images/trem.jpeg')},
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
