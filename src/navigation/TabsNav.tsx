import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { StackNav } from './StackNav';
import { TabSearch } from './TabsSearch';

const Tab = createBottomTabNavigator();

export const TabsNav = () => {
   return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                marginBottom: ( Platform.OS === 'android' ) ? 10 : 0
            },
            tabBarStyle:{
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS === 'android') ? 60 : 80,
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }
        }}

        
    >
        <Tab.Screen 
            name="StackNav" 
            component={ StackNav }
            options={{
                tabBarLabel: "Pokemons",
                tabBarIcon: ({ color }) => (
                    <Icon
                        name='list-outline'
                        size={ 20 }
                        color= { color }
                    
                    />
                )
            }}
        />
        <Tab.Screen
            name="SearchScreen" 
            component={ TabSearch }
            options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color }) => (
                    <Icon
                        name='search-outline'
                        size={ 20 }
                        color= { color }
                    
                    />
                )
            }}     
        />
    </Tab.Navigator>
   )
}

