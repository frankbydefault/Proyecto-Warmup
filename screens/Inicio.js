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

//imports
import { createStackNavigator } from "@react-navigation/stack";
import { VAN } from "../calculoCae.js";
import { TextInputMask } from "react-native-masked-text";
import firebase from "../history/firebase";

const Stack = createStackNavigator();

function Inicio() {
  //Calcular CAE
  const [credito, setCredito] = useState("");
  const [cuota, setCuota] = useState("");
  const [nCuotas, setNcuotas] = useState("");

  //Guarda la data en la base de datos
  const saveData = async (credito, cuota, nCuotas) => {
    if (credito === "" || cuota === "" || nCuotas === "") {
      alert("Rellene todos los campos");
    } else {
      await firebase.db.collection("data").add({
        Credito: credito,
        Cuota: cuota,
        nCuotas: nCuotas,
        cae: VAN(credito, cuota, nCuotas, cuota),
      });
    }
  };

  function Compuesta() {
    //Para poner dos funciones en el "onPress" hay que hacer una funcion compuesta
    saveData(credito, cuota, nCuotas);
    if(Platform.OS === 'web') alert('CAE calculado: ' + VAN(credito, cuota, nCuotas, cuota));
    else Alert.alert('CAE calculado: ' + VAN(credito, cuota, nCuotas, cuota));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ingrese Crédito</Text>
      <TextInputMask
        type={"money"}
        value={credito}
        style={styles.input}
        placeholder="Ej. $1.000.000"
        includeRawValueInChangeText={true}
        options={{
          precision: 0,
          separator: "",
          delimiter: ".",
          unit: "$",
          suffixUnit: "",
        }}
        onChangeText={(text, rawValue) => setCredito(rawValue)}
      />

      <Text style={styles.title}>Ingrese Valor de Cuota</Text>
      <TextInputMask
        type={"money"}
        value={cuota}
        style={styles.input}
        placeholder="Ej. $120.000"
        includeRawValueInChangeText={true}
        options={{
          precision: 0,
          separator: "",
          delimiter: ".",
          unit: "$",
          suffixUnit: "",
        }}
        onChangeText={(text, rawValue) => setCuota(rawValue)}
      />

      <Text style={styles.title}>Ingrese Número de Cuotas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 12"
        onChangeText={(val) => setNcuotas(val)}
      />

      <TouchableOpacity
        onPress={() => {
          Compuesta();
        }}
        style={styles.button}
      >
        <Text>Calcular CAE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
//funcion de calculo del cae
function calculoCae(credito, cuota, nCuotas) {
  if (parseFloat(credito) && parseFloat(cuota) && parseFloat(nCuotas)) {
    if (Platform.OS === "web")
      alert(
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
      );
    else
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
      );
  } else {
    if (Platform.OS === "web")
      alert("Los valores ingresados deben ser números");
    else Alert.alert("Los valores ingresados deben ser números");
  }
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
