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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function display() {
  const renderItem = ({ item }) => <Item title={item.title} />;

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
    backgroundColor: "#DFDFDF",
    padding: 55,
    marginVertical: 5,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: "tomato",
    borderRadius: 40,
  },
  title: {
    fontSize: 32,
  },
});
