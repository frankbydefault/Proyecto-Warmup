import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola mundo!</Text>
      <Button
        title="Presioname"
        onPress={() => Alert.alert('Boton presionado')}
      />
      <TextInput
      
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="numero"
        keyboardType="numeric"
      
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
