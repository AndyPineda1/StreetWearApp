import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Pedidos</Text>
      {/* Aquí puedes agregar los campos y la lógica para la pantalla de historial de pedidos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5cdb6',
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

export default OrderHistoryScreen;
