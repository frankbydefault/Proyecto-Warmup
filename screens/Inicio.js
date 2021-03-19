import React,{useState} from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput,AsyncStorage } from "react-native";

function Inicio() {
  //Calcular CAE
  const [credito,setCredito] = useState('');
  const [cuota,setCuota] = useState('');
  const [nCuotas,setNcuotas] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigTitle}>Calcular Cae</Text>


      <Text style={styles.title}>Ingrese Credito</Text>
      <TextInput
        style={styles.input}
        placeholder="Precio al contado"
        onChangeText={(val) => setCredito(val)}
      />

      <Text style={styles.title}>Ingrese Valor de Cuota</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor de la cuota mensual"
        onChangeText={(val) => setCuota(val)}
      />    
      
      <Text style={styles.title}>Ingrese Número de Cuotas</Text>
      <TextInput
        style={styles.input}
        placeholder="Numero de cuotas"
        onChangeText={(val) => setNcuotas(val)}
      />

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
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },

  title: { 
    fontSize: 30,
    borderBottomColor: "#ff4d4d",
    textShadowRadius : 3,
   },

  bigTitle: { 
    fontSize: 50, 
    marginBottom: 20,
    marginTop : -60,
    textShadowRadius: 5, 
  },

  button: { 
    backgroundColor: "#ff4d4d", 
    padding: 25,
    marginTop: 10,
    borderRadius :50,
  },

  input:{
    height: 60,
    margin: 12,
    padding :20,
    paddingHorizontal:40,
    borderWidth: 2,
    borderColor :'#ff4d4d',
    textAlign : 'center',
    borderRadius : 30,
    fontSize: 15,
  },   
});
