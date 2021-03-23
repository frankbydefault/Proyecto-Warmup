import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
  StatusBar,
  Platform,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {VAN } from '../calculoCae.js';
const Stack = createStackNavigator();

function Inicio() {
  //Calcular CAE
  const [credito, setCredito] = useState("");
  const [cuota, setCuota] = useState("");
  const [nCuotas, setNcuotas] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ingrese Credito</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'  
        placeholder="Precio al contado"
        onChangeText={(val) => setCredito(val)}
      />

      <Text style={styles.title}>Ingrese Valor de Cuota</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Valor de la cuota mensual"
        onChangeText={(val) => setCuota(val)}
      />

      <Text style={styles.title}>Ingrese Número de Cuotas</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Numero de cuotas"
        onChangeText={(val) => setNcuotas(val)}
      />

      <TouchableOpacity
        onPress={() => {

          if(Platform.OS === 'web'){

            alert('CAE calculado: ' + VAN(
              credito,
              cuota,
              nCuotas,
              cuota,
              undefined,
              undefined,
              undefined,
              undefined
            ));

          }else{

          Alert.alert(
            "CAE calculado: " +
              VAN(
                credito,
                cuota,
                nCuotas,
                cuota,
                undefined,
                undefined,
                undefined,
                undefined
              )

          )

              }
              }
        }
        style={styles.button}
      >
        <Text>Calcular CAE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function InicioHeader() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InicioHeader"
        component={Inicio}
        options={{
          title: "Calcular CAE",
          headerStyle: {
            backgroundColor: "#444",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleStyle: { alignSelf: "center" },
        }}
      />
    </Stack.Navigator>
  );
}

export default InicioHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    borderBottomColor: "#ff4d4d",
    textShadowRadius: 3,
  },

  bigTitle: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: -50,
    textShadowRadius: 5,
  },

  button: {
    backgroundColor: "#ff4d4d",
    padding: 25,
    marginTop: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  input: {
    height: 60,
    width: 300,
    margin: 12,
    padding: 20,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: "#ff4d4d",
    textAlign: "center",
    borderRadius: 30,
    fontSize: 15,
  },
});
