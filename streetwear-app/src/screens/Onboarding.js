import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Onboarding({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a la aplicación!</Text>
            <Text style={styles.description}>
                Descubre todas las funcionalidades que tenemos para ti. ¡Empieza tu viaje de venta con nosotros!
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.replace('sesion')}>
                <Text style={styles.buttonText}>Empezar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0F1316',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: '#B0BEC5',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#1E88E5',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
