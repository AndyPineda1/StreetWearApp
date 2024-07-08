import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clave</Text>
      {/* Aquí puedes agregar los campos y la lógica para la pantalla de clave */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c4240',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
});

export default PasswordScreen;
