import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./StackNav";
import { SearchScreen } from "../screens/SearchScreen";
import { PokemonScreen } from "../screens/PokemonScreen";

const TabSearchNav = createStackNavigator<RootStackParams>();

export const TabSearch = () => {
  return (
    <TabSearchNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <TabSearchNav.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearchNav.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearchNav.Navigator>
  );
}