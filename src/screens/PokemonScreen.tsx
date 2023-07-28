import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon  from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/StackNav'
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route}: Props) => {
    
    const { simplePokemon, color} = route.params;
    const { id, name, picture } = simplePokemon;

    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

    const { top } = useSafeAreaInsets(); 

    const { isLoading, pokemon } = usePokemon( id );

   return (
        <ScrollView 
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={ false }
        >
            <View style={{ ...stylesScreen.header, backgroundColor: color  }}>

                {/* Back button */}
                <TouchableOpacity 
                    onPress={ () => navigation.pop() }
                    activeOpacity={ 0.7 }
                    style={{ ...stylesScreen.backButton, top: top+5 }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={ 50 }
                    />
                </TouchableOpacity>

                {/* Pokemon name */}
                <Text style={{
                    ...stylesScreen.pokemonName,
                    top: top+60
                }}>
                    {pokemonName}
                </Text>
                
                {/* Pokeball */}
                <Image
                    source={ require('../assets/pokebola-blanca.png')}
                    style={ stylesScreen.pokeball}
                />

                {/* Pokemon picture */}
                <FadeInImage
                    uri={ picture }
                    style={ stylesScreen.pokemonImage}
                    color={color}
                />

            </View>

            {/* Details */}
            
            {
                isLoading 
                ? (
                    <View style={ stylesScreen.activityIndicator }>
                        <ActivityIndicator
                            color={ color }
                            size={ 50 }
                            style={{paddingTop: 30 }}
                        />
                    </View>
                ) : ( <PokemonDetails pokemon={ pokemon } color={ color }/> )
            }
            
       </ScrollView>
   )

}

const stylesScreen = StyleSheet.create({
    header:{
        height:370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        fontWeight: 'bold'
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -60,
        opacity: 0.5
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -18
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});