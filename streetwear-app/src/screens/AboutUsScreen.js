import React from 'react';
import Buttons from "../components/Buttons/Button";
import fetchData from "../utils/conexion";
import { View, Text, StyleSheet, Linking, TouchableOpacity, Alert } from 'react-native';

export default function AboutUsScreen({navigation}){
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const handleLogout = async () => {
    try {
      const DATA = await fetchData("cliente", "logOut");
      if (DATA.status) {
        navigation.navigate('sesion');
        Alert.alert('Info', 'Se ha cerrado la sesión');
      } else {
        Alert.alert('Error', DATA.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al cerrar la sesión');
    }

    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Text style={styles.description}>
      StreetWearDrop es una tienda de ropa urbana de toda marca,
      además de la ropa en nuestro catálogo de artículos se encuentran accesorios para complementar
      los diferentes vestuarios de nuestros usuarios.

      La función principal de nuestra aplicación es presentar un método mucho más rápido y sencillo
      de poder comprar ropa teniendo un certificado de autenticidad y a precios alcanzables para la población,
      al alcance de la población salvadoreña debido a que no tendrían que pagar los altos costes envíos y los
      recibirían hasta la puerta de la casa.
      </Text>
      <Text style={styles.subtitle}>Síguenos en nuestras redes sociales:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => handlePress('https://www.facebook.com')}>
          <Text style={styles.socialLink}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://www.twitter.com')}>
          <Text style={styles.socialLink}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://www.instagram.com')}>
          <Text style={styles.socialLink}>Instagram</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>© 2024 StreetWearDrop</Text>
      <Buttons textoBoton='Cerrar Sesión' accionBoton={handleLogout} />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#000',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 24,
  },
  socialLink: {
    fontSize: 18,
    color: '#0000ff',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginTop: 24,
  },
});