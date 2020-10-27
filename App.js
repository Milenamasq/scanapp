import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Firstela from './src/pages/Firstela';
import Sectela from './src/pages/Sectela';
import Terctela from './src/pages/Terctela';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Firstela">
        <Stack.Screen name="App Scan" component={Firstela} />
        <Stack.Screen name="Escolha sua foto" component={Sectela} />
        <Stack.Screen name="Tire sua foto" component={Terctela} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}