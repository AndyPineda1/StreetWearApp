// Importamos los componentes necesarios de React y React Native, así como algunos componentes personalizados.
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList, RefreshControl } from "react-native";
import ProductoCard from '../components/cards/producto';
import * as constantes from '../utils/constantes';
import fetchData from "../utils/fetchdata";

// Definimos el componente funcional Home que recibe la navegación como parámetro.
export default function Home({ navigation }) {

  const [dataProductos, setDataProductos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Función para manejar el evento de refrescar la lista de productos.
  const onRefresh = () => {
    setRefreshing(true);
    // Simulando una recarga de datos
    setTimeout(() => {
      getProductos();
      setRefreshing(false);
    }, 200); // Tiempo de espera para la recarga
  };

  // Función asincrónica para obtener todos los productos.
  const getProductos = async () => {
    try {
      const DATA = await fetchData("producto", "readAll");
      if (DATA.status) {
        setDataProductos(DATA.dataset);
      } else {
        console.log("Data en el ELSE error productos", DATA);
        Alert.alert('Error productos', DATA.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert('Error', 'Ocurrió un error al listar los productos');
    }
  }

  // Efecto para cargar los productos al montar el componente.
  useEffect(() => {
    getProductos();
  }, []);


  // Renderizamos el componente principal de la pantalla de inicio.
  return (
    <View style={styles.container}>
      <Text style={styles.MainText}>Productos de StreetwearDrop</Text>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.scrollViewContent}
        data={dataProductos}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => (
          <ProductoCard
            ip={constantes.IP}
            imagenProducto={item.imagen_producto}
            idProducto={item.id_producto}
            nombreProducto={item.nombre_producto}
            subTitle={item.descripcion_producto}
            precioProducto={item.precio_producto}
            navigation={navigation}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );

}

// Estilos del componente.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
  MainText: {
    fontSize: 30,
    fontFamily: 'FuturaMedium',
    marginTop: 30,
    marginBottom: 40,
    textAlign: "center"
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  flatlist: {
    width: '100%'
  }
});
