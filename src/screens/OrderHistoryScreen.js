import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Función simulada para obtener el historial de pedidos del cliente (deberías reemplazarla con una función real que obtenga los datos de tu base de datos)
const getOrderHistory = () => {
  return [
    {
      id_pedido: 1,
      nombre_producto: 'Camiseta',
      cantidad_producto: 2,
      descripcion_producto: 'Camiseta de algodón',
      precio_producto: 19.99,
      imagen_producto: 'https://via.placeholder.com/100',
      talla_producto: 'M',
      color_producto: 'Azul',
      fecha_pedido: '2023-07-01',
    },
    {
      id_pedido: 2,
      nombre_producto: 'Pantalones',
      cantidad_producto: 1,
      descripcion_producto: 'Pantalones de mezclilla',
      precio_producto: 39.99,
      imagen_producto: 'https://via.placeholder.com/100',
      talla_producto: 'L',
      color_producto: 'Negro',
      fecha_pedido: '2023-06-25',
    },
  ];
};

const OrderHistoryScreen = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const data = getOrderHistory();
    setOrderHistory(data);
  }, []);

  if (orderHistory.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Historial de Pedidos</Text>
      {orderHistory.map((order) => (
        <View key={order.id_pedido} style={styles.orderContainer}>
          <Image source={{ uri: order.imagen_producto }} style={styles.image} />
          <View style={styles.orderDetails}>
            <Text style={styles.orderText}>Producto: {order.nombre_producto}</Text>
            <Text style={styles.orderText}>Cantidad: {order.cantidad_producto}</Text>
            <Text style={styles.orderText}>Descripción: {order.descripcion_producto}</Text>
            <Text style={styles.orderText}>Precio: ${order.precio_producto.toFixed(2)}</Text>
            <Text style={styles.orderText}>Talla: {order.talla_producto}</Text>
            <Text style={styles.orderText}>Color: {order.color_producto}</Text>
            <Text style={styles.orderText}>Fecha del Pedido: {order.fecha_pedido}</Text>
          </View>
        </View>
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
  orderContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  orderDetails: {
    flex: 1,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export default OrderHistoryScreen;
