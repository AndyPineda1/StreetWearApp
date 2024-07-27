import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  FlatList,
  RefreshControl,
  Alert
} from "react-native";
import fetchData from "../utils/conexion";
import BgButton from "../components/Buttons/BgButton";

export default function Sesion({ navigation }) {
  const [dataCategorias, setDataCategorias] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getCategorias = async () => {
    try {
      const DATA = await fetchData("categoria", "readCategoryWithProduct");
      if (DATA.status) {
        setDataCategorias(DATA.dataset);
      } else {
        console.log("Error en productos", DATA);
        Alert.alert("Error productos", DATA.error);
      }
    } catch (error) {
      console.error("Error al obtener categorías", error);
      Alert.alert("Error", "Ocurrió un error al listar las categorías");
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getCategorias();
      setRefreshing(false);
    }, 200);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ImageBackground
        source={require("../../src/img/streetweardrop_bg.png")}
        style={styles.decorator}
      >
        <Image
          source={require("../../assets/streetweardrop_logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </ImageBackground>

      <View style={styles.mainContainer}>
        <Text style={styles.largeText}>Últimas Tendencias</Text>

        <FlatList
          style={styles.flatlist}
          data={dataCategorias}
          keyExtractor={(item) => item.categoria_id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.flatlistColumnWrapper}
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
  largeText: {
    fontSize: 25,
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
    paddingVertical: 20,
  },
  flatlist: {
    width: '90%',
    paddingHorizontal: 10,
  },
  flatlistColumnWrapper: {
    justifyContent: 'space-between',
  },
});
