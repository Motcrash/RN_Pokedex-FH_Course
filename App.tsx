import React from 'react'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigation/StackNav';

const App = () => {
   return (
       <NavigationContainer>
        <StackNav/>
       </NavigationContainer>
   )
}

export default App;