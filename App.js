import { StatusBar } from "expo-status-bar";
import React from "react";
import { styles } from "./styles";
import { Text, SafeAreaView, Button, TextInput } from "react-native";

export default function App() {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola mundo! kk</Text>
      <Button title="Press me" onPress={() => alert("El botón se presionó")} />
      <TextInput
        style={styles.input}
        onChangeText={(number) => onChangeNumber(number)}
        value={number}
        placeholder="number"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
