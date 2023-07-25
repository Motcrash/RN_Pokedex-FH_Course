import React from 'react'
import { Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPagination } from '../hooks/usePokemonPagination'
import { FadeInImage } from '../components/FadeInImage'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPagination();

   return (
       <>   

            <Image
                source={ require('../assets/pokebola.png')}
                style={ styles.pokebolaBG }
            />
            
            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top+20
            }}>Pokedex</Text> */}

            <FlatList
                data={ simplePokemonList }
                keyExtractor={ ( poke ) => poke.id }
                showsVerticalScrollIndicator={ false }
                renderItem={({ item }) => (
                    <FadeInImage
                        uri={ item.picture }  
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                ) }

                // InfiniteScroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }

                // Activity indicator
                ListFooterComponent={(
                    <ActivityIndicator 
                        style={{ height: 100}}
                        color='red'
                        size={ 30 }
                    />
                )}
            /> 

       </>
   )
}