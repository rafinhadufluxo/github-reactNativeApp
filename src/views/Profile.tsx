import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil Screen</Text>
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

export default Perfil;
