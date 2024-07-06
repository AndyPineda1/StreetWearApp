import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './screens/AccountScreen';
import ProfileScreen from './screens/ProfileScreen';
import PasswordScreen from './screens/PasswordScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import AboutUsScreen from './screens/AboutUsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
