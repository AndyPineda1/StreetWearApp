// Importamos los componentes necesarios de React y React Native, así como algunos componentes personalizados.
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  StatusBar,
  FlatList,
  RefreshControl,
} from "react-native";
import fetchData from "../utils/conexion";
import BgButton from "../components/Buttons/Button";

// Definimos el componente funcional Sesion que recibe la navegación como prop.
export default function Sesion({ navigation }) {
  // Definimos estados locales para manejar los datos de categorías y el estado de refresco.
  const [dataCategorias, setDataCategorias] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Función asincrónica para obtener las categorías con productos.
  const getCategorias = async () => {
    try {
      // Consulta a la API para obtener las categorías de productos
      const DATA = await fetchData("categoria", "readCategoryWithProduct");
      if (DATA.status) {
        // Si la respuesta es exitosa, guardamos las categorías en el estado
        setDataCategorias(DATA.dataset);
      } else {
        console.log("Data en el ELSE error productos", DATA);
        Alert.alert("Error productos", DATA.error);
      }
    } catch (error) {
      // Capturamos y manejamos errores que puedan ocurrir durante la solicitud.
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al listar las categorías");
    }
  };

  // Función de manejo de refresco, simulando una recarga de datos.
  const onRefresh = () => {
    setRefreshing(true);
    // Simulamos una recarga de datos
    setTimeout(() => {
      getCategorias();
      setRefreshing(false);
    }, 200); // Tiempo de espera para la recarga
  };

  // Efecto para cargar las categorías al montar el componente.
  useEffect(() => {
    getCategorias();
  }, []);

  // Renderizamos el componente principal de la pantalla de sesión.
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.mainContainer}>
        <Text style={styles.LargeText}>Nuestras Categorías</Text>

        <FlatList
          style={styles.flatlist}
          data={dataCategorias}
          keyExtractor={(item) => item.categoria_id.toString()}
          numColumns={2} // Establecemos dos columnas para las categorías
          columnWrapperStyle={styles.flatlistColumnWrapper} // Estilo para el contenedor de columnas
          renderItem={({ item }) => (
            <BgButton
              texto={item.categoria_nombre}
              idCategoria={item.categoria_id}
              navigation={navigation}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}

// Estilos del componente.
const styles = StyleSheet.create({
  decorator: {
    height: 300,
    width: "100%",
    position: "relative",
  },
  image: {
    width: 200,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  LargeText: {
    fontSize: 25,
    fontFamily: "FuturaMedium",
    marginTop: 30,
    marginBottom: 30,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    marginTop: -90,
    borderTopLeftRadius: 60,
  },
  flatlist: {
    width: "90%",
    paddingHorizontal: 10,
  },
  flatlistColumnWrapper: {
    justifyContent: "space-between",
  },
});
