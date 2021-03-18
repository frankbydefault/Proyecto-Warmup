import React from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import InputCredito from "../components/Texto Credito";
import InputValor from "../components/Texto Cuota Mensual";
import InputCuotas from "../components/Texto N Cuotas";

function Inicio() {
  //Calcular CAE
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigTitle}>Calcular Cae</Text>
      <Text style={styles.title}>Ingrese Credito</Text>
      <InputCredito />
      <Text style={styles.title}>Ingrese Valor de Cuota</Text>
      <InputValor />
      <Text style={styles.title}>Ingrese Número de Cuotas</Text>
      <InputCuotas />

      <TouchableOpacity
        onPress={() => Alert.alert("CAE calculado")}
        style={styles.button}
      >
        <Text>Calcular CAE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Inicio;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 25 },
  bigTitle: { fontSize: 40, marginBottom: 50 },
  button: { backgroundColor: "tomato", padding: 15, marginTop: 10 },
});
