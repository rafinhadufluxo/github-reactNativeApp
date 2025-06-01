/* import React, { useState } from 'react';
import { View, StatusBar, useColorScheme, SafeAreaView  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/views/LoginScreen';
import HomeScreen from './src/views/HomeScreen';
import RegisterScreen from './src/views/RegisterScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);  // Autenticação bem-sucedida, vai para Home
  };

  const handleRegister = () => {
    setIsRegistering(true);  // O usuário está registrando, navega para a tela de registro
  };

  const handleLogout = () => {
    setIsAuthenticated(false);  // Logout, volta para a tela de login
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      {isAuthenticated ? (
        <HomeScreen onLogout={handleLogout} />
      ) : isRegistering ? (
        <RegisterScreen onSwitch={() => setIsRegistering(false)} onRegister={handleLogin} />
      ) : (
        <LoginScreen onLogin={handleLogin} onSwitch={handleRegister} />
      )}
    </View>
  );
};

export default App;
 */

import React, { useState } from 'react';
import { View, StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/views/LoginScreen';
import HomeScreen from './src/views/HomeScreen';
import RegisterScreen from './src/views/RegisterScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <View style={{ flex: 1, backgroundColor }}>
        {isAuthenticated ? (
          <HomeScreen onLogout={handleLogout} />
        ) : isRegistering ? (
          <RegisterScreen onSwitch={() => setIsRegistering(false)} onRegister={handleLogin} />
        ) : (
          <LoginScreen onLogin={handleLogin} onSwitch={handleRegister} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
