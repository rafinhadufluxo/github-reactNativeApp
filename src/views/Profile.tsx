import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  useColorScheme,
} from 'react-native';

const { height } = Dimensions.get('window');

const Perfil = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleSalvar = () => {
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Descrição:', descricao);
    console.log('LinkedIn:', linkedin);
    console.log('Twitter:', twitter);
    console.log('Instagram:', instagram);
  };

  const handleCancelar = () => {
    setNome('');
    setSobrenome('');
    setDescricao('');
    setLinkedin('');
    setTwitter('');
    setInstagram('');
  };

  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, themeStyles.background]}>
      <View style={styles.container}>
        <Text style={[styles.header, themeStyles.text]}>Editar Perfil</Text>

        {/* Imagem e Saudação */}
        <View style={[styles.imagem, themeStyles.profileContainer]}>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={themeStyles.profileImage} />
        </View>

        {/* Campos */}
        <Text style={[styles.label, themeStyles.text]}>Nome</Text>
        <TextInput
          style={[styles.input, themeStyles.input]}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <Text style={[styles.label, themeStyles.text]}>Sobrenome</Text>
        <TextInput
          style={[styles.input, themeStyles.input]}
          value={sobrenome}
          onChangeText={setSobrenome}
          placeholder="Digite seu sobrenome"
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <Text style={[styles.label, themeStyles.text]}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.descricao, themeStyles.input]}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Fale um pouco sobre você"
          multiline
          numberOfLines={6}
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <Text style={[styles.label, themeStyles.text]}>LinkedIn</Text>
        <TextInput
          style={[styles.input, themeStyles.input]}
          value={linkedin}
          onChangeText={setLinkedin}
          placeholder="URL do LinkedIn"
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <Text style={[styles.label, themeStyles.text]}>Twitter</Text>
        <TextInput
          style={[styles.input, themeStyles.input]}
          value={twitter}
          onChangeText={setTwitter}
          placeholder="URL do Twitter"
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <Text style={[styles.label, themeStyles.text]}>Instagram</Text>
        <TextInput
          style={[styles.input, themeStyles.input]}
          value={instagram}
          onChangeText={setInstagram}
          placeholder="URL do Instagram"
          placeholderTextColor={themeStyles.placeholder.color}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.salvar]} onPress={handleSalvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.cancelar]} onPress={handleCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const getThemeStyles = (isDark: boolean) => ({
  background: {
    backgroundColor: isDark ? '#000' : '#fff',
  },
  text: {
    color: isDark ? '#fff' : '#000',
  },
  input: {
    backgroundColor: isDark ? '#222' : '#f9f9f9',
    borderColor: isDark ? '#555' : '#ccc',
    color: isDark ? '#fff' : '#000',
  },
  placeholder: {
    color: isDark ? '#aaa' : '#666',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: isDark ? '#444' : '#ccc',
    width: '100%',
    marginTop: 12,
  },
});

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: height,
    padding: 20,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 5,
  },
  imagem:{
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
    width: '100%',
  },
  descricao: {
    height: 120,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  salvar: {
    backgroundColor: '#4CAF50',
  },
  cancelar: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Perfil;
