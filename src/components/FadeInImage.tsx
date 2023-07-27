import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>,
    color: string
}

export const FadeInImage = ({ uri, style = {}, color } : Props) => {
    
    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
        setIsLoading( false );
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>
            
            {
                isLoading && 
                    <ActivityIndicator 
                        style={{ position: 'absolute' }} 
                        color={ color || 'red'}
                        size={ 30 }
                    />
            }

            <Animated.Image 
                source={{ uri }}
                onError={ onError } 
                onLoad={ finishLoading }
                style={{
                    ...style as any,
                    opacity
                }}
            />

        </View>
    )
}