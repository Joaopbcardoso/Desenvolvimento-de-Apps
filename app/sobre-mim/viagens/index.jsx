import { FlatList, Image, Text } from "react-native"

export default function Viagens(){
    const data = [
        { id: '1', link: '1.jpeg' },
        { id: '2', link: '2.jpeg' }
    ];
    return(
        <Text>Oi</Text>
    //     <FlatList
    //     data={data}
    //     keyExtractor={(foto) => foto.id}
    //     renderfoto={({ foto }) => (
    //         <Image 
    //         style={styles.link} 
    //         source={require({foto.link})}>
    //         </Image>
    //     )}
    // />
    )
}