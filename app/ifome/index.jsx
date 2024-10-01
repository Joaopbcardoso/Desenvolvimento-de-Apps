import React, { useContext,useState,useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../../scripts/appContext";
import { Link } from "expo-router";

const produtos = [
    {
        id: '1',
        nome: 'Combo pra Mim',
        estabelecimento: 'Okawa Sushi Bar',
        preco: 41.90,
        imagem: 'https://static.wixstatic.com/media/1d0b6f_1079e86f23094136ad88e2f485df8fc0~mv2.jpg/v1/crop/x_100,y_0,w_1849,h_1365/fill/w_316,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0239.jpg',
    },
    {
        id: '2',
        nome: 'Combo pra Nós',
        estabelecimento: 'Okawa Sushi Bar' ,
        preco: 99.90,
        imagem: 'https://static.wixstatic.com/media/1d0b6f_8a4c3292e4cc46c0b53ad223d14a54fe~mv2.jpg/v1/crop/x_0,y_182,w_1365,h_1002/fill/w_316,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/edIMG_0339.jpg',
    },
    {
        id: '3',
        nome: 'Combo Magnifico',
        estabelecimento: 'Okawa Sushi Bar',
        preco: 129.90,
        imagem: 'https://static.wixstatic.com/media/1d0b6f_96a80767c3c1452dacfedc3926fee86e~mv2.jpg/v1/crop/x_23,y_34,w_1757,h_1291/fill/w_316,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9760.jpg',
    },
];

const Produtos = ({ item, onAddToCart }) => (
    <View style={styles.produtoContainer}>
        <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
        <View style={styles.produtoInfo}>
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text style={styles.produtoEstabelecimento}>{item.estabelecimento}</Text>
            <Text style={styles.produtoPreco}>R${item.preco.toFixed(2).replace('.', ',')}</Text>
            <Pressable style={styles.comprarButton} onPress={() => onAddToCart(item)}>
                <Text style={styles.comprarButtonText}>Comprar</Text>
            </Pressable>
        </View>
    </View>
);

export default function App() {
    const { cart, setCart } = useContext(AppContext);
    const [cartLenght, setCartLength] = useState(0)

    const pushCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
        console.log(cart);
    };

    useEffect(() => { if (cart.length) { setCartLength(cart.length); } console.log(cart.length) }, [cart])



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>iFome</Text>
            </View>
            <View style={styles.carrinho}>
                <Link href='./cart'>
                    <Image source={{ uri: '../../assets/images/cart.png' }} style={styles.carrinhoImagem} />
                </Link>
                <Text style={styles.carrinhoTexto}>{`${cartLenght} produtos`}</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Produtos item={item} onAddToCart={pushCart} />}
                keyExtractor={item => item.id}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f10065',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
    },
    carrinho: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-end',
    },
    carrinhoImagem: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    carrinhoTexto: {
        fontSize: 16,
    },
    flatList: {
        marginTop: 10,
    },
    produtoContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    produtoImagem: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
    },
    produtoNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    produtoEstabelecimento: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },
    comprarButton: {
        backgroundColor: '#f10065',
        padding: 10,
        borderRadius: 5,
    },
    comprarButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});