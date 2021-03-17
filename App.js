import React from "react";
import {Text, View, StyleSheet, TouchableOpacity,Alert} from 'react-native';
import InputCredito from './components/Texto Credito'
import InputValor from './components/Texto Cuota Mensual'
import InputCuotas from './components/Texto N Cuotas'

const App =() => {
  return (
  <View style ={styles.container}>
    <Text style={styles.bigTitle}>Calcular Cae</Text>
    <Text style={styles.title}>Ingrese Credito</Text>
    <InputCredito/>
    <Text style={styles.title}>Ingrese Valor de Cuota</Text>
    <InputValor/>
    <Text style={styles.title}>Ingrese Número de Cuotas</Text>
    <InputCuotas/>
    
    <TouchableOpacity 
     onPress ={() => Alert.alert('CAE calculado')}
     style = {styles.button}
    >
        <Text>Calcular CAE</Text>
    </TouchableOpacity>
  </View>
  ); 
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center", alignItems: "center"},
  title: {fontSize: 30},
  bigTitle: {fontSize: 50, marginBottom: 50},
  button: {backgroundColor: '#ff4d4d', padding: 15, marginTop: 10},
});

export default App;
