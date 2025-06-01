import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';

interface Repo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  Ruby: '#701516',
  Swift: '#ffac45',
  'C++': '#f34b7d',
  'C#': '#178600',
  Go: '#00ADD8',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  Shell: '#89e051',
  Rust: '#dea584',
  default: '#ccc',
};

const Recomendation = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=react-native&sort=stars&order=desc'
      );
      const data = await response.json();
      setRepos(data.items.slice(0, 10));
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  const abrirRepositorio = (url: string) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }: { item: Repo }) => {
    const color = languageColors[item.language || 'default'] || languageColors.default;

    return (
      <TouchableOpacity onPress={() => abrirRepositorio(item.html_url)} style={styles.repoContainer}>
        <Text style={styles.repoNome}>{item.full_name}</Text>
        <Text style={styles.repoDescricao}>{item.description}</Text>
        <View style={styles.repoFooter}>
           <Text style={styles.repoStars}>⭐ {item.stargazers_count}</Text>
          {item.language && (
            <View style={styles.languageContainer}>
              <View style={[styles.languageCircle, { backgroundColor: color }]} />
              <Text style={styles.languageText}>{item.language}</Text>
            </View>
          )}
         
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={repos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.lista}
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
  lista: {
    paddingBottom: 20,
  },
  repoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  repoNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoDescricao: {
    fontSize: 14,
    marginTop: 4,
  },
  repoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  repoStars: {
    fontSize: 13,
    color: 'gray',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  languageText: {
    fontSize: 13,
    color: 'gray',
  },
});

export default Recomendation;
