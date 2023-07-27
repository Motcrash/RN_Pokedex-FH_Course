import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonInfo, Sprites, Stat } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonInfo,
    color: string,
}

export const PokemonDetails = ({ pokemon, color }: Props) => {

   return (
        // Container
       <View style={{
            marginTop: 10,
            marginBottom: 20,
            marginHorizontal: 20
        }}>

            <Text style={{...stylesScreen.title, marginTop: 0}}>Types</Text>

            {/* Types */}
            <View style={{ flexDirection: 'row'}}>
                {
                    pokemon.types.map( ({ type }) => (
                        <Text
                            style={{
                                ...stylesScreen.infoText,
                                marginRight: 1
                            }}
                            key={ type.name }
                        >
                            { type.name }
                        </Text>
                    ))
                }
            </View>
            
            {/* Weight */}
            <View>
                <Text style={stylesScreen.title}>Weight</Text>
                <Text style={ stylesScreen.infoText }>{ pokemon.weight } lb</Text>
            </View>

            {/* Sprites */}
            <Text style={stylesScreen.title}>Sprites</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <FadeInImage
                        uri={ pokemon.sprites.front_default }
                        style={ stylesScreen.sprites }
                        color={ color }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.back_default }
                        style={ stylesScreen.sprites }
                        color={ color }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.front_shiny }
                        style={ stylesScreen.sprites }
                        color={ color }
                    />
                    <FadeInImage
                        uri={ pokemon.sprites.back_shiny }
                        style={ stylesScreen.sprites }
                        color={ color }
                    />
            </View>

            {/* Basic abilities */}
            <Text style={stylesScreen.title}>Basic abilities</Text>
            <View style={{ flexDirection: 'row'}}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{
                                ...stylesScreen.infoText,
                                marginRight: 6
                            }}
                            key={ ability.name }
                        >
                            { ability.name }
                        </Text>
                    ))
                }
            </View>

            {/* Stats */}
            <Text style={stylesScreen.title}>Stats</Text>
            <View style={{ flexWrap: 'wrap', marginHorizontal: 20}}>
                {
                    pokemon.stats.map( ( stat, index ) => (
                        <View
                            key={ stat.stat.name + index}
                            style={{ flexDirection: 'row'}}
                        >
                            <Text 
                                key={ stat.stat.name  }
                                style={{ 
                                    ...stylesScreen.infoText,
                                    width: 150
                                }}
                            >{ stat.stat.name  } </Text>

                            <Text 
                                style={{ fontWeight: 'bold'}}
                            >{ stat.base_stat } </Text>

                        </View>
                    ))
                }
            </View>

            {/* Moves */}
            <Text style={stylesScreen.title}>Moves</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text 
                            key={ move.name }
                            style={{ ...stylesScreen.infoText, marginRight: 5}}
                        >{ move.name } </Text>
                    ))
                }
            </View>

       </View>
   )
}
const stylesScreen = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    infoText: {
        fontSize: 16,
    },
    sprites: {
        width: 100,
        height: 100
    }
});