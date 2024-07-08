import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const getClientData = () => {
  return {
    id_Cliente: 1,
    nombre_Cliente: 'Juan',
    apellido_Cliente: 'Pérez',
    numero_Cliente: '123456789',
    correo_Cliente: 'juan.perez@example.com',
    direccion_Cliente: '123 Calle Final, Ciudad, País',
    img_Cliente: 'https://via.placeholder.com/150',
    estado_Cliente: 1,
    id_Genero: 1,
  };
};

const ProfileScreen = () => {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const data = getClientData();
    setClientData(data);
  }, []);

  if (!clientData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: clientData.img_Cliente }} style={styles.image} />
      <Text style={styles.title}>Perfil de {clientData.nombre_Cliente} {clientData.apellido_Cliente}</Text>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{clientData.nombre_Cliente}</Text>
      <Text style={styles.label}>Apellido:</Text>
      <Text style={styles.value}>{clientData.apellido_Cliente}</Text>
      <Text style={styles.label}>Número de Teléfono:</Text>
      <Text style={styles.value}>{clientData.numero_Cliente}</Text>
      <Text style={styles.label}>Correo Electrónico:</Text>
      <Text style={styles.value}>{clientData.correo_Cliente}</Text>
      <Text style={styles.label}>Dirección:</Text>
      <Text style={styles.value}>{clientData.direccion_Cliente}</Text>
      <Text style={styles.label}>Estado del Cliente:</Text>
      <Text style={styles.value}>{clientData.estado_Cliente ? 'Activo' : 'Inactivo'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d5cdb6',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#000',
  },
  value: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export default ProfileScreen;

