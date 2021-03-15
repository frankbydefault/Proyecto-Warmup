import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {styles} from './styles';
import { Text, SafeAreaView, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola mundo!</Text>
      <Button
        title="Press me"
        onPress={() => alert('Boton presionado')}
      />
      <TextInput
      
        style={styles.input}
        onChangeText={number => onChangeNumber(number)}
        value={number}
        placeholder="numero"
        keyboardType="numeric"
      
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
