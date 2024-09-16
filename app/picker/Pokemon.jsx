import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: 200,
    },
});

export default function Seletor() {
    const [pokemon, setPokemon] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [pokeType, setPokeType] = useState('');
    const [type, setType] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type?limit=100')
            .then((response) => response.json())
            .then((dados) => setType(dados.results));
    }, []);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => response.json())
            .then((dados) => setPokemons(dados.results));
    }, []);

    useEffect(() => {
        if (pokeType) {
            fetch(pokeType)
                .then((response) => response.json())
                .then((dados) => {
                    const promises = dados.pokemon.map((p) => fetch(p.pokemon.url).then((res) => res.json()));
                    Promise.all(promises).then((results) => setFilteredPokemons(results));
                });
        }
    }, [pokeType]);

    return (
        <View>
            <Text>Selecione um tipo de Pokémon</Text>
            <Picker
                selectedValue={pokeType}
                style={styles.picker}
                onValueChange={(itemValue) => setPokeType(itemValue)}
            >
                <Picker.Item label="Selecione um tipo" value="" />
                {type.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.url} />
                ))}
            </Picker>

            <Text>Selecione um Pokémon</Text>
            <Picker
                selectedValue={pokemon}
                style={styles.picker}
                onValueChange={(itemValue) => setPokemon(itemValue)}
            >
                <Picker.Item label="Selecione um Pokémon" value="" />
                {filteredPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url} />
                ))}
            </Picker>
        </View>
    );
}
