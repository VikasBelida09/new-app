import React from "react";
import { View } from "react-native";
import styles from "./styles";
import TabScreen from "./screens/tabscreen";
const LoggedInPage = (props) => {
  return (
    <View style={styles.container}>
      <TabScreen />
    </View>
  );
};
export default LoggedInPage;
