/* import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Image,
  useColorScheme,
} from 'react-native';

type HomeScreenProps = {
  onLogout: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const systemTheme = useColorScheme();
  const isDark = isDarkMode ?? systemTheme === 'dark';

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    if (menuVisible) setMenuVisible(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = getStyles(isDark);

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.header}>
        <TouchableOpacity onPress={toggleMenu} style={themeStyles.toggleButton}>
          <Text style={themeStyles.toggleText}>☰</Text>
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={themeStyles.overlay}>
            <Pressable style={themeStyles.sideMenu}>
              <View style={{ flex: 1 }}>
                <View style={themeStyles.profileContainer}>
                  <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={themeStyles.profileImage} />
                  <Text style={themeStyles.profileName}>Olá, Charles!</Text>
                  <View style={themeStyles.separator} />
                </View>

                <TouchableOpacity>
                  <Text style={themeStyles.menuItem}>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onLogout}>
                  <Text style={themeStyles.menuItem}>Sair</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={toggleTheme} style={themeStyles.menuItemRow}>
                <Text style={themeStyles.menuItem}>
                  {isDark ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
                </Text>
                
              </TouchableOpacity>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      )}

      <View style={themeStyles.content}>
        <Text style={themeStyles.welcome}>Bem-vindo à Home</Text>
      </View>
    </View>
  );
};

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#fff',
    },
    header: {
      backgroundColor: isDark ? '#333' : '#2196F3',
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 16,
      alignItems: 'flex-end',
    },
    toggleButton: {
      padding: 8,
    },
    toggleText: {
      color: '#fff',
      fontSize: 24,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      fontSize: 24,
      color: isDark ? '#fff' : '#000',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.2)',
      zIndex: 999,
    },
    sideMenu: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 220,
      backgroundColor: isDark ? '#222' : '#f2f2f2',
      paddingTop: 60,
      paddingHorizontal: 20,
      elevation: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 20,
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 8,
    },
    profileName: {
      fontSize: 16,
      color: isDark ? '#fff' : '#000',
      fontWeight: '600',
    },
    menuItemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      width: '100%',
    },
    menuItem: {
      fontSize: 18,
      color: isDark ? '#fff' : '#000',
      marginBottom: 16,
    },
    separator: {
      height: 1,
      backgroundColor: isDark ? '#444' : '#ccc',
      width: '100%',
      marginTop: 8,
      marginBottom: 20,
    },
  });

export default HomeScreen; */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Image,
  useColorScheme,
} from 'react-native';

type HomeScreenProps = {
  onLogout: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'profile' | 'recomendation'>('feed');

  const systemTheme = useColorScheme();
  const isDark = isDarkMode ?? systemTheme === 'dark';

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => menuVisible && setMenuVisible(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themeStyles = getStyles(isDark);

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <Text style={themeStyles.welcome}>🏠 Feed</Text>;
      case 'profile':
        return <Text style={themeStyles.welcome}>👤 Perfil</Text>;
      case 'recomendation':
        return <Text style={themeStyles.welcome}>⚙️ recomendation</Text>;
    }
  };

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.header}>
        <TouchableOpacity onPress={toggleMenu} style={themeStyles.toggleButton}>
          <Text style={themeStyles.toggleText}>☰</Text>
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={themeStyles.overlay}>
            <Pressable style={themeStyles.sideMenu}>
              <View style={{ flex: 1 }}>
                <View style={themeStyles.profileContainer}>
                  <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={themeStyles.profileImage} />
                  <Text style={themeStyles.profileName}>Olá, Charles!</Text>
                  <View style={themeStyles.separator} />
                </View>

                <TouchableOpacity>
                  <Text style={themeStyles.menuItem}>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onLogout}>
                  <Text style={themeStyles.menuItem}>Sair</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={toggleTheme} style={themeStyles.menuItemRow}>
                <Text style={themeStyles.menuItem}>
                  {isDark ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      )}

      <View style={themeStyles.content}>
        {renderContent()}
      </View>

      {/* Rodapé com abas */}
      <View style={themeStyles.footer}>
        <Pressable style={themeStyles.tab} onPress={() => setActiveTab('recomendation')}>
          <Text style={[themeStyles.tabText, activeTab === 'recomendation' && themeStyles.tabActive]}>Para você</Text>
        </Pressable>
        <Pressable style={themeStyles.tab} onPress={() => setActiveTab('feed')}>
          <Text style={[themeStyles.tabText, activeTab === 'feed' && themeStyles.tabActive]}>Feed</Text>
        </Pressable>
        <Pressable style={themeStyles.tab} onPress={() => setActiveTab('profile')}>
          <Text style={[themeStyles.tabText, activeTab === 'profile' && themeStyles.tabActive]}>Perfil</Text>
        </Pressable>
       
      </View>
    </View>
  );
};

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#121212' : '#fff',
    },
    header: {
      backgroundColor: isDark ? '#333' : '#2196F3',
      paddingTop: 40,
      paddingBottom: 20,
      paddingHorizontal: 16,
      alignItems: 'flex-end',
    },
    toggleButton: {
      padding: 8,
    },
    toggleText: {
      color: '#fff',
      fontSize: 24,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      fontSize: 24,
      color: isDark ? '#fff' : '#000',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.2)',
      zIndex: 999,
    },
    sideMenu: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: 220,
      backgroundColor: isDark ? '#222' : '#f2f2f2',
      paddingTop: 60,
      paddingHorizontal: 20,
      elevation: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 20,
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 8,
    },
    profileName: {
      fontSize: 16,
      color: isDark ? '#fff' : '#000',
      fontWeight: '600',
    },
    menuItemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      width: '100%',
    },
    menuItem: {
      fontSize: 18,
      color: isDark ? '#fff' : '#000',
      marginBottom: 16,
    },
    separator: {
      height: 1,
      backgroundColor: isDark ? '#444' : '#ccc',
      width: '100%',
      marginTop: 8,
      marginBottom: 20,
    },

    // Footer com abas
   footer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 20, // aumentado
  backgroundColor: isDark ? '#333' : '#f9f9f9',
  borderTopWidth: 1,
  borderTopColor: isDark ? '#444' : '#ccc',
  height: 100, // aumentado
},

tab: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12, // adicionado para deixar a área de toque maior
},

tabText: {
  fontSize: 18, // maior
  color: isDark ? '#aaa' : '#555',
},

tabActive: {
  color: isDark ? '#fff' : '#000',
  fontWeight: 'bold',
  fontSize: 20, // maior ainda
},

});

export default HomeScreen;
