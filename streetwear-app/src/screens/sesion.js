import React, { useEffect, useState } from "react";
import { TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import fetchData from "../utils/conexion";
import Input from "../components/Inputs/Input";
import Buttons from "../components/Buttons/Button";

export default function Sesion({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const validarSesion = async () => {
    try {
      const DATA = await fetchData("cliente", "getUser");
      if (DATA.session) {
        //cerrarSesion();
        //console.log("Se eliminó la sesión");

        setContrasenia("");
        setUsuario("");
        // Navega a la siguiente pantalla o ruta en la aplicación
        navigation.replace("navigator");
      } else {
        console.log("No hay sesión activa");
        return;
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al validar la sesión");
    }
  };

  const cerrarSesion = async () => {
    try {
      const DATA = await fetchData("cliente", "logOut");

      if (DATA.status) {
        console.log("Sesión Finalizada");
      } else {
        console.log("No se pudo eliminar la sesión");
      }
    } catch (error) {
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al iniciar sesión con bryancito");
    }
  };

  const handlerLogin = async () => {
    try {
      // Crea un formulario FormData con los datos de usuario y contraseña
      const form = new FormData();
      form.append("correo", usuario);
      form.append("clave", contrasenia);

      // Realiza una solicitud para iniciar sesión usando fetchData
      const DATA = await fetchData("cliente", "logIn", form);

      // Verifica la respuesta del servidor
      if (DATA.status) {
        // Limpia los campos de usuario y contraseña
        setContrasenia("");
        setUsuario("");
        // Navega a la siguiente pantalla o ruta en la aplicación
        navigation.replace("navigator");
      } else {
        // Muestra una alerta en caso de error
        console.log(DATA);
        Alert.alert("Error sesión", DATA.error);
      }
    } catch (error) {
      // Maneja errores que puedan ocurrir durante la solicitud
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al iniciar sesión");
    }
  };

  useEffect(() => {
    validarSesion();
  }, []);

  return (
    <View style={styles.container}>
      <>
        <View>
          <Input
            placeHolder="Usuario"
            setValor={usuario}
            setTextChange={setUsuario}
          />
          <Input
            placeHolder="Contraseña"
            setValor={contrasenia}
            setTextChange={setContrasenia}
            contra={true}
          />
          <Buttons textoBoton="Iniciar Sesión" accionBoton={handlerLogin} />
        </View>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center"
  },
});
