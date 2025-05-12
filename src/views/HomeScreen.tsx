import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type HomeScreenProps = {
  onLogout: () => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <Button title="Sair" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
