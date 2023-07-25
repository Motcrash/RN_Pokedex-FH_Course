import React from 'react'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
   return (
       <NavigationContainer>
        <HomeScreen/>
        <Icon
          name='accessibility-outline'
          size={ 40 }
        />
       </NavigationContainer>
   )
}

export default App;