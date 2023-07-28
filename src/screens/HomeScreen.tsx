import React from 'react'
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPagination } from '../hooks/usePokemonPagination'
import { PokemonCard } from '../components/PokemonCard'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons, isLoading } = usePokemonPagination();

   return (
       <>   

            <Image
                source={ require('../assets/pokebola.png')}
                style={ styles.pokebolaBG }
            />

            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={ ( poke ) => poke.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    renderItem={({ item }) => <PokemonCard pokemon={ item }/>  }
                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top+20,
                            marginBottom: 20
                        }}>Pokedex</Text>
                    )}

                    // InfiniteScroll
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }

                    // Activity indicator
                    ListFooterComponent={(
                        
                            (isLoading) ? 
                        <ActivityIndicator 
                            style={{ height: 100}}
                            color='red'
                            size={ 30 }
                        />
                        
                        : <></>
                        
                    )}
                /> 
            </View>

       </>
   )
}