import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const history = require('../history/historial.json');

const Stack = createStackNavigator();

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    Credito: "6000000000",
    Cuota: "111111",
    nCuotas: "30",
    CAE: "18.3%",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    Credito: "2000000000",
    Cuota: "13484",
    nCuotas: "34",
    CAE: "38.6%",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    Credito: "9000000000",
    Cuota: "10938",
    nCuotas: "20",
    CAE: "29.4%",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e7772",
    Credito: "7000000000",
    Cuota: "937489",
    nCuotas: "40",
    CAE: "15.5%",
  },
];

const Item = ({ Cuota, Credito, nCuotas, CAE }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Credito: {Credito}</Text>
    <Text style={styles.title}>Cuota: {Cuota}</Text>
    <Text style={styles.title}>Numero de Cuotas: {nCuotas}</Text>
    <Text style={styles.title}>CAE: {CAE}</Text>
  </View>
);

function display() {
  const renderItem = ({ item }) => (
    <Item
      Cuota={item.Cuota}
      Credito={item.Credito}
      nCuotas={item.nCuotas}
      CAE={item.CAE}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

function Historial() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Historial"
        component={display}
        options={{
          title: "Historial",
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

export default Historial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    textAlign: "center",
    paddingBottom: 4,
    fontSize: 20,
  },
});
