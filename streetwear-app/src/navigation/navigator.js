import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Importa tus componentes de pantalla aquí
import inicio from '../screens/inicio';
import carrito from '../screens/carrito';
import ajustes from '../screens/AboutUsScreen';
import productos from '../screens/Productos';
import profilescreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';  // Importa EditProfileScreen
import ProductCatalogScreen from '../screens/ProductCatalogScreen';  // Importa ProductCatalogScreen

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
                    } else if (route.name === 'productos') {
                        iconName = focused ? 'shirt' : 'shirt-outline'; // Ícono para productos
                    } else if (route.name === 'profile') {
                        iconName = focused ? 'person' : 'person-outline'; // Ícono para perfil
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
            <Tab.Screen
                name="productos"
                component={productos}
                options={{ title: '' }}
            />
            <Tab.Screen
                name="profile"
                component={profilescreen}
                options={{ title: '' }}
            />
            <Tab.Screen
                name="editProfile"
                component={EditProfileScreen}
                options={{ title: '' }}
            />
            <Tab.Screen
                name="productCatalog"
                component={ProductCatalogScreen}
                options={{ title: '' }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;