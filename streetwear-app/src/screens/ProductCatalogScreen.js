import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Camiseta', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Pantalones', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Zapatillas', price: '$50', image: 'https://via.placeholder.com/150' },
  // Agrega más productos aquí
];

const ProductCatalogScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => {/* Navegar a los detalles del producto */}}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
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
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductCatalogScreen;
