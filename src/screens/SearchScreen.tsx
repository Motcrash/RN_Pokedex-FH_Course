import React, { useState } from 'react'
import { Platform, View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/appTheme';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokeSearch, setPokeSearch] = useState<SimplePokemon[]>([])

    const [term, setTerm] = useState('')

    useEffect(() => {
        if( term.length === 0 ) {
            return setPokeSearch([]);
        }

        if( !isNaN(Number(term)) ){
            const pokemonById = simplePokemonList.find( poke => poke.id === term );
            setPokeSearch(
                ( pokemonById ) ? [pokemonById] : []
            )
        }else {
        setPokeSearch(
            simplePokemonList.filter( poke => poke.name.toLocaleLowerCase().
                includes( term.toLocaleLowerCase() ) )
            )
        }

    }, [term])
    

    if( isFetching ) return <Loading/>
    

   return (
        <>
            <View style={{ 
                flex:1,
                marginHorizontal: 20
            }}>
                <SearchInput
                    onDebounce={( value ) => setTerm( value )}
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        width: screenWidth - 40,
                        marginTop: (Platform.OS === 'android') ? top + 20 : top,
                    }}
                />

                <View style={{ marginBottom: 50}}>
                    <FlatList
                        data={ pokeSearch }
                        keyExtractor={ ( poke ) => poke.id }
                        showsVerticalScrollIndicator={ false }
                        numColumns={ 2 }
                        // Header
                        ListHeaderComponent={(
                            <Text style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                marginTop: 65,
                                marginBottom: 10
                            }}>{ term }</Text>
                        )}
                        renderItem={({ item }) => (<PokemonCard pokemon={ item }/>)  }
                    /> 
                </View>

            </View>
        </>
   )
}