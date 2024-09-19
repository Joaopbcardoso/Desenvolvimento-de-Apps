import HeaderSobre from "../../components/HeaderSobre";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {

  const data = [
    { id: '1', link: './cristo-vive', titulo: 'Cristo Vive ✞' },
    { id: '2', link: './viagens', titulo: 'Viagens' }
  ];
  
  return (
    <>
        <View style={styles.container}>
            <HeaderSobre
            titulo = 'Sobre Mim'
            />
        <View style={styles.main}>
            <Image
            style={styles.perfil}
            source={require('../../assets/images/perfil-sobre.jpeg')}
            />
            <Text style={styles.welcome}>Bem-vindo(a) ao meu App</Text>
            <Text style={styles.descricao}>Sou um aluno de Desenvolvimento de Sistemas, temente a Deus e que ama viajar, por isso trouxe algumas de minhas experiências para esse App!</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link style={styles.link} href={item.link}>
                        {item.titulo}
                    </Link>
                )}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },

    main:{
      flex: 1,
      alignItems: 'center',
      marginTop: 30
    },

    perfil: {
      width: 200,
      height: 200,
      overflow: 'hidden',
      borderRadius: parseInt('100%')
    },

    welcome:{
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10
    },

    descricao: {
      textAlign: 'center',
      margin: 10,
      width: 305
    },

    link:{
      backgroundColor: '#0479b3',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      width: 300,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
    }
  });