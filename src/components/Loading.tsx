import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const Loading = () => {
   return (
        <View style={ stylesScreen.activityContainer }>
            <ActivityIndicator
                size={ 50 }
                color= 'gray'
            />
        </View>
   )
}

const stylesScreen = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});