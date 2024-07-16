import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Importa tus componentes de pantalla aquí
import inicio from '../screens/inicio';
import carrito from '../screens/carrito';
import ajustes from '../screens/ajustes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

<Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Oculta el header
        tabBarActiveTintColor: '#6F7FA1', // Color de los íconos activos
        tabBarInactiveTintColor: '#6F7FA1', // Color de los íconos inactivos
        tabBarStyle: { backgroundColor: '#FFF', height: 60, borderTopWidth: 0 }, // Estilo de la barra de pestañas
        tabBarIcon: ({ focused, color, size }) => { // Función que define el ícono de la pestaña
          let iconName;
          if (route.name === 'carrito') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ajustes') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >

      <Tab.Screen
        name="carrito"
        component={carrito}
        options={{ title: '' }}
      />
      <Tab.Screen
        name="inicio"
        component={inicio}
        options={{ title: '' }}
      />
      <Tab.Screen
        name="ajustes"
        component={ajustes}
        options={{ title: '' }}
      />
    </Tab.Navigator>
    );
};

export default TabNavigator;

