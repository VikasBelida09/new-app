import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";
const LoginPage = (props) => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};
export default LoginPage;
