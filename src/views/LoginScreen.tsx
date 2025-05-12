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

export default function LoginScreen({
  onLogin,
  onSwitch,
}: {
  onLogin: () => void;
  onSwitch: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (email === 'adm' && password === 'adm') {
      onLogin(); // Login bem-sucedido
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
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
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSwitch}>
          <Text style={styles.link}>Não tem conta? Registre-se</Text>
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
