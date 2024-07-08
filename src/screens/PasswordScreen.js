import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas nuevas no coinciden.');
      return;
    }
    // Aquí agregarías la lógica para cambiar la contraseña en tu base de datos
    Alert.alert('Éxito', 'La contraseña ha sido cambiada.');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clave</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña Actual"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Nueva Contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c4240',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  forgotPassword: {
    marginTop: 16,
    color: '#00f',
    textAlign: 'center',
  },
});

export default PasswordScreen;
