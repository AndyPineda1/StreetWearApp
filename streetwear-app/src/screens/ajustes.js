import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import fetchData from "../utils/conexion";
import Buttons from "../components/Buttons/Button";

export default function Ajustes({ navigation }) {

  const handleLogout = async () => {
    try {
      const DATA = await fetchData("cliente", "logOut");
      if (DATA.status) {
        navigation.navigate('sesion');
      } else {
        Alert.alert('Error', DATA.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al cerrar la sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Buttons textoBoton='Cerrar Sesión' accionBoton={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
