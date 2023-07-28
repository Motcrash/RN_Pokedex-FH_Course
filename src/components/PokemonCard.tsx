import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';
import { getColors } from 'react-native-image-colors';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon,
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('gray');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    useEffect(() => {

        if ( !isMounted.current )  return;
        getColors(pokemon.picture, { fallback: '#808080'})
            .then( colors => {

                if (colors.platform === 'android'){
                    setBgColor(colors.dominant || 'gray');
                }else if (colors.platform === 'ios'){
                    setBgColor(colors.background || 'gray');
                }
            });

        return () => {
            isMounted.current = false 
        }

    }, [])
    

   return (
       <View>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ 
                    () => navigation.navigate(
                        'PokemonScreen',{
                            simplePokemon: pokemon,
                            color: bgColor
                        }
                )}
            >
                <View style={{...stylesScreen.cardContainer, backgroundColor: bgColor }}>
                    <View style={ stylesScreen.nameContainer }>
                        <Text style={ stylesScreen.pokeName }>
                            { pokemonName }
                            { '\n#' + pokemon.id }
                        </Text>
                    </View>
                    
                    <View style={ stylesScreen.pokeballContainer }>
                        <Image
                            source={ require('../assets/pokebola-blanca.png')}
                            style={ stylesScreen.pokeball }
                        />
                    </View>
                    

                    <FadeInImage
                        uri={ pokemon.picture }
                        style={ stylesScreen.pokeImage }
                        color='red'
                    />
                </View>
            </TouchableOpacity>
       </View>
   )
}

const stylesScreen = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: windowWidth * 0.4,
        marginBottom: 25,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    nameContainer: {
        top: 20,
        left: 10,
        width: 130,
    },
    pokeName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden'      
    },
    pokeball: {
        width: 100,
        height: 100,
        opacity: 0.4,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    pokeImage: {
        width: 90,
        height: 90,
        position: 'absolute',
        right: -9,
        bottom: -5,
    },
});