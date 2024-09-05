import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker'

const styles = StyleSheet.create({

})

export default function Seletor(){
    const[pokemon, setPokemon] = useState('');
    const [pokemons, setPokemons] = useState([])

    // const pokemons = [
    //     {nome: 'Pikachu', value: 'Pikachu'},
    //     {nome:'Bulbasaur', value: 'Bulbasaur'},
    //     {nome: 'Charmander', value: 'Charmander'},
    //     {nome: 'Charizard', value: 'Charizard'},
    //     {nome: 'Squirtle', value: 'Squirtle'}
    // ]

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => response.json())
            .then((dados => setPokemons(dados.results)))
    }, [])


    return(
        <View>
            <Text>Selecione um Pokémon</Text>
            <Picker
                selectedValue={pokemon}
                style = {styles.picker}
                onValueChange= {(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label= "Selecione um Pokémon" />
                {pokemons.map((item, index) => (
                    <Picker.Item Key={index} label={item.name} value={item.url}/>
                ))}
            </Picker>
        </View>
    )
}