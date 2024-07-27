// Importamos los componentes necesarios de React y React Native, así como algunos componentes personalizados y constantes.
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import ProductoCard from '../components/cards/producto';
import * as constantes from '../utils/constantes';
import fetchData from "../utils/conexion";
import { useNavigation } from "@react-navigation/native";

// Definimos el componente funcional CategoriaScreen que recibe los parámetros de ruta.
export default function CategoriaScreen({ route }) {
  // Extraemos el idCategoria de los parámetros de ruta.
  const { idCategoria } = route.params;

  // Definimos estados locales para manejar los datos de productos, nombre de categoría y navegación.
  const [dataProductos, setDataProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const navigation = useNavigation();

  // Función asincrónica para obtener la información de la categoría.
  const getData = async () => {
    try {
      const form = new FormData();
      form.append("idCategoria", idCategoria);
      const DATA = await fetchData("categoria", "readOne", form);
      if (DATA.status) {
        const categoria = DATA.dataset;
        setNombre(categoria.nombreCategoria);
      } else {
        console.log("Data en el ELSE error productos", DATA);
        Alert.alert("Error productos", DATA.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al listar los productos");
    }
  };

  // Función asincrónica para obtener los productos de la categoría.
  const getProductos = async () => {
    try {
      const form = new FormData();
      form.append("idCategoria", idCategoria);
      const DATA = await fetchData("producto", "readByCategory", form);
      if (DATA.status) {
        setDataProductos(DATA.dataset);
      } else {
        console.log("Data en el ELSE error productos", DATA);
        Alert.alert("Error productos", DATA.error);
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al listar los productos");
    }
  };

  // Efecto para cargar la información de la categoría y los productos al montar el componente.
  useEffect(() => {
    getData();
    getProductos();
  }, []);

  // Renderizamos el componente principal de la pantalla de categoría.
  return (
    <View style={styles.container}>
      <Text style={styles.regresar} onPress={() => {navigation.goBack();}}>{"< Regresar"}</Text>
      <Text style={styles.MainText}>{nombre}</Text>
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
  regresar: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 40,
    color: "#007bff", // color azul
    width: "100%"
  },
  MainText: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 40
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  flatlist: {
    width: '100%'
  },
});






