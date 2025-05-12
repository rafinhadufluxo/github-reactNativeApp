import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

export default function RegisterScreen({
  onSwitch,
  onRegister,
}: {
  onSwitch: () => void;
  onRegister: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (name === 'adm' && email === 'adm' && password === 'adm') {
      Alert.alert('Sucesso', 'Registro bem-sucedido!');
      onRegister();
    } else {
      Alert.alert('Erro', 'Dados inválidos para registro');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        isLandscape && { paddingVertical: 40 },
      ]}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/Github-desktop-logo-symbol.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Registrar</Text>
        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSwitch}>
          <Text style={styles.link}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    /* flexGrow: 1, */
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingTop: 120,
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'none',
    
  },
});
