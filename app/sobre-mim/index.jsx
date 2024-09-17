import HeaderSobre from "../../components/HeaderSobre";
import { StyleSheet, Image, Text, View} from "react-native";

export default function SobreHome(){
    return(
        <>
        <View style={styles.header}>
            <HeaderSobre
            style={styles.titulo}
            titulo = 'Home'
            />
        </View>
        <View style={styles.main}>
            <Image
            style={styles.perfil}
            source={require('../../assets/images/perfil-sobre.jpeg')}
            />
            <Text>Bem-vindo(a) ao meu App</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0479b3',
        height: 50,
    },

    titulo: {
        color: '#fff'
    },


    perfil: {
        width: 200,
        height: 200,
        borderRadius: '100%'
    },

})

