import React from 'react'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TabsNav } from './src/navigation/TabsNav';

const App = () => {
   return (
       <NavigationContainer>
        <TabsNav/>
       </NavigationContainer>
   )
}

export default App;