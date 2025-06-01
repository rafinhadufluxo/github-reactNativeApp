/* import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

// Define o tipo de um usuário do GitHub
interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
}

const Feed = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);

  // Função que faz a requisição para a API do GitHub
  const fetchUsers = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const json = await response.json();
      setResults(json.items || []);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce para controlar o delay entre as requisições
  const debounceFetchUsers = useCallback(
    debounce((query: string) => fetchUsers(query), 500),
    []
  );

  const handleSearchChange = (text: string) => {
    setSearch(text);
    debounceFetchUsers(text); // Chama a função de busca com debounce
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar usuários..."
          value={search}
          onChangeText={handleSearchChange}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => fetchUsers(search)} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
              <Text style={styles.username}>{item.login}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

// Função de debounce para controle do delay entre as requisições
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    fontSize: 18,
    width: '80%', // Você pode ajustar para '90%' ou valor fixo se preferir
  },
  searchButton: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 8,
    borderWidth: 2,
    borderColor: '#000',
    height: 50,
    width: 60,
  },
  searchButtonText: {
    fontSize: 21,
    color: '#000',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Feed; */

import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

import UserDetails from './UserDetails'; // Importa o componente UserDetails

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
}

const Feed = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null);

  const fetchUsers = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const json = await response.json();
      setResults(json.items || []);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  const debounceFetchUsers = useCallback(
    debounce((query: string) => fetchUsers(query), 500),
    []
  );

  const handleSearchChange = (text: string) => {
    setSearch(text);
    debounceFetchUsers(text);
  };

  // Quando clicar no usuário da lista
  const handleUserSelect = (user: GitHubUser) => {
    setSelectedUser(user);
  };

  // Limpar a seleção para voltar para a busca
  const clearSelection = () => {
    setSelectedUser(null);
    setSearch('');
    setResults([]);
  };

  return (
    <View style={styles.container}>
      {selectedUser ? (
        <UserDetails user={selectedUser} onBack={clearSelection} />
      ) : (
        <>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Buscar usuários..."
              value={search}
              onChangeText={handleSearchChange}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => fetchUsers(search)} style={styles.searchButton}>
              <Text style={styles.searchButtonText}>🔍</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() => handleUserSelect(item)}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
                  <Text style={styles.username}>{item.login}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </>
      )}
    </View>
  );
};

// Função debounce para controlar chamadas da busca
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    fontSize: 18,
    width: '80%',
  },
  searchButton: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 8,
    borderWidth: 2,
    borderColor: '#000',
    height: 50,
    width: 60,
  },
  searchButtonText: {
    fontSize: 21,
    color: '#000',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Feed;