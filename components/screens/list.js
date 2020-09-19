import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function List() {
  const navigation = useNavigation();

  const navigateToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>List Screen</Text>
      <Button title="Open Dashboard" onPress={() => navigateToDashboard()} />
    </View>
  );
}
