import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce:( value: string ) => void,
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ( { style, onDebounce}: Props ) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue( textValue );

    useEffect(() => {
        onDebounce( debouncedValue );
    }, [debouncedValue])
    

   return (
        <View style={{
            ...stylesScreen.container,
            ...style as any
        }}>
            <View style={ stylesScreen.textBackground}>
                <TextInput
                    placeholder='Search Pokémon'
                    style={ stylesScreen.textInput }
                    autoCapitalize='none'
                    autoCorrect={ false }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />

                <Icon
                    name='search-outline'
                    color='gray'
                    size={ 20 }
                />
            </View>
       </View>
   )
}

const stylesScreen = StyleSheet.create({
    container: {
    },
    textBackground: {
        backgroundColor: '#c9cdd1',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: (Platform.OS === 'android') ? 2 : 0,
    }
});