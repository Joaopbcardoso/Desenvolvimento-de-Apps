import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#43C5D2', '#0A1E2E']}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={require('./img/disney.gif')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0, // add this to make the gradient full screen
  },

  container: {
    flex: 1,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    width: 200, // add a width and height to the logo
    height: 200,
  },
});