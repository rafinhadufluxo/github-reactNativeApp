import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

interface UserDetailsProps {
  user: {
    login: string;
    id: number;
    avatar_url: string;
  };
  onBack: () => void;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  forks_count: number; // <- Adicionado
  language: string | null;
  html_url: string;
}

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  C: '#555555',
  Cpp: '#f34b7d',
  Ruby: '#701516',
  Swift: '#ffac45',
  Go: '#00ADD8',
  PHP: '#4F5D95',
  Kotlin: '#F18E33',
  Shell: '#89e051',
  Dart: '#00B4AB',
};

const UserDetails: React.FC<UserDetailsProps> = ({ user, onBack }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [user.login]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Repositórios de {user.login}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={repos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.repoItem}>
              <Text style={styles.repoName}>{item.name}</Text>
              {item.description ? (
                <Text style={styles.repoDescription}>{item.description}</Text>
              ) : (
                <Text style={styles.repoDescription}></Text>
              )}
              <View style={styles.repoStats}>
                <View style={styles.iconText}>
                  <Icon name="star" size={16} color="#f4c242" />
                  <Text style={styles.stat}> {item.stargazers_count}</Text>
                </View>
                <View style={styles.iconText}>
                  <Icon name="code-branch" size={16} color="#666" />
                  <Text style={styles.stat}> {item.forks_count}</Text>
                </View>
                <View style={styles.iconText}>
                  {item.language && (
                    <View
                      style={[
                        styles.languageDot,
                        { backgroundColor: languageColors[item.language] || '#ccc' },
                      ]}
                    />
                  )}
                  <Text style={styles.stat}>{item.language}</Text>
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={<Text>Nenhum repositório encontrado.</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 12,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  repoItem: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  repoDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginVertical: 4,
  },
  repoStats: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 4,
  },
  stat: {
    fontSize: 14,
    color: '#333',
  },
  languageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
});

export default UserDetails;
