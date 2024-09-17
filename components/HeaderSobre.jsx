import { Text, View, StyleSheet } from 'react-native';

export default function HeaderSobre({ titulo }) {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: '#0479b3',
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        
      },
      
      titulo: {
        color: '#fff',
        fontSize: 25,
        marginLeft: 10, 
        fontWeight: 'bold' 
      },
})
