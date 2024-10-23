import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen';
import AreaPix from './src/screens/AreaPix';
import Transferir from './src/screens/Transferir';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AreaPix" component={AreaPix} />
        <Stack.Screen name="Transferir" component={Transferir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
