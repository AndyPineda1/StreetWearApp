import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import sesion from './src/screens/sesion';
import navigator from './src/navigation/navigator';
import registro from './src/screens/registro';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='sesion'
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="sesion" component={sesion} />
        <Stack.Screen name="navigator" component={navigator} />
        <Stack.Screen name="registro" component={registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}