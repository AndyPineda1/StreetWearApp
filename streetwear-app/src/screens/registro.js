import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from "react-native";
import Input from "../components/Inputs/Input";
import MaskedInputTelefono from "../components/Inputs/MaskedInputTelefono";
import Buttons from "../components/Buttons/Button";
import fetchData from "../utils/conexion";

export default function Registro({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [confirmarContrasenia, setConfirmarContrasenia] = useState("");
  const [correo, setCorreo] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // Función para manejar el registro de un nuevo usuario
  const handlerRegistro = async () => {
    try {
      // Crear un FormData con los datos del usuario
      const form = new FormData();
      form.append("nombreCliente", nombre);
      form.append("apellidoCliente", apellido);
      form.append("claveCliente", contrasenia);
      form.append("telefonoCliente", telefono);
      form.append("correoCliente", correo);
      form.append("confirmarClave", confirmarContrasenia);

      // Llamar a la función fetchData para enviar los datos al servidor
      const DATA = await fetchData("cliente", "signUpMovil", form);
      if (DATA.status) {
        // Si el registro es exitoso, proceder al inicio de sesión
        await handlerLogin();
      } else {
        // Mostrar una alerta en caso de error durante el registro
        console.log(DATA.error);
        Alert.alert("Error", DATA.error);
        return;
      }
    } catch (error) {
      // Capturar y manejar errores durante la solicitud
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al registrar la cuenta");
    }
  };

  // Función para manejar el inicio de sesión
  const handlerLogin = async () => {
    try {
      // Crear un FormData con los datos de inicio de sesión
      const form = new FormData();
      form.append("correo", correo);
      form.append("clave", contrasenia);

      // Realizar una solicitud para iniciar sesión usando fetchData
      const DATA = await fetchData("cliente", "logIn", form);
      // Verificar la respuesta del servidor
      if (DATA.status) {
        // Mostrar una alerta de bienvenida y limpiar los campos del formulario
        Alert.alert("Bienvenido!", "Cuenta registrada satisfactoriamente");
        clearFields();
        // Navegar a la pantalla principal de la aplicación
        navigation.replace("navigator");
      } else {
        // Mostrar una alerta en caso de error durante el inicio de sesión
        console.log(DATA);
        Alert.alert("Error sesión", DATA.error);
      }
    } catch (error) {
      // Capturar y manejar errores durante la solicitud
      console.error(error, "Error desde Catch");
      Alert.alert("Error", "Ocurrió un error al iniciar sesión");
    }
  };

  // Efecto para detectar si el teclado está visible o no
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // Actualizar estado cuando el teclado se muestra
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // Actualizar estado cuando el teclado se oculta
      }
    );

    // Limpiar los listeners al desmontar el componente para evitar memory leaks
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Función para navegar a la pantalla de inicio de sesión
  const navigateSesion = async () => {
    navigation.replace("sesion");
  };

  // Función para limpiar los campos del formulario
  const clearFields = () => {
    setContrasenia("");
    setTelefono("");
    setApellido("");
    setNombre("");
    setCorreo("");
    setConfirmarContrasenia("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.mainContainer, keyboardVisible]}>
          <Text style={styles.LargeText}>¡Regístrate!</Text>
          <Input
            placeHolder="Nombre"
            setValor={nombre}
            setTextChange={setNombre}
          />
          <Input
            placeHolder="Apellido"
            setValor={apellido}
            setTextChange={setApellido}
          />
          <MaskedInputTelefono
            telefono={telefono}
            setTelefono={setTelefono}
          />
          <Input
            placeHolder="Correo"
            setValor={correo}
            setTextChange={setCorreo}
          />
          <Input
            placeHolder="Contraseña"
            setValor={contrasenia}
            setTextChange={setContrasenia}
            contra={true}
          />
          <Input
            placeHolder="Confirmar Contraseña"
            setValor={confirmarContrasenia}
            setTextChange={setConfirmarContrasenia}
            contra={true}
          />
          <Text style={styles.devider}></Text>
          <Buttons textoBoton="¡Regístrate!" accionBoton={handlerRegistro} />
          <TouchableOpacity style={styles.textPositioner}>
            <Text style={styles.buttonText} onPress={navigateSesion}>
              ¿Ya tienes cuenta? Inicia Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  decorator: {
    height: 300,
    width: "100%",
    position: "relative",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  LargeText: {
    fontSize: 35,
    marginTop: 13,
    marginBottom: 25,
  },
  textPositioner: {
    marginTop: 25,
  },
  buttonText: {
    marginBottom: 20,
    fontSize: 20,
  },
  texto: {
    color: "#322C2B",
    fontWeight: "900",
    fontSize: 20,
  },
  textRegistrar: {
    color: "#322C2B",
    fontWeight: "700",
    fontSize: 18,
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 60,
  },
  devider: {
    marginTop: 10,
  },
});
