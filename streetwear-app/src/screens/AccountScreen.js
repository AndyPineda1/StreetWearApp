import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuenta</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={50} color="#fff" />
          <Text style={styles.cardText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Password')}>
          <Icon name="lock" size={50} color="#fff" />
          <Text style={styles.cardText}>Clave</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('OrderHistory')}>
          <Icon name="history" size={50} color="#fff" />
          <Text style={styles.cardText}>Historial de pedidos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AboutUs')}>
          <Icon name="group" size={50} color="#fff" />
          <Text style={styles.cardText}>Sobre nosotros</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    margin: 8,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: '#fff',
  },
});

export default AccountScreen;
