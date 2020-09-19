import React from "react";
import { View } from "react-native";
import * as Google from "expo-google-app-auth";
import LoginPage from "./components/LoginPage";
import LoggedInPage from "./components/LoggedInPage";
import styles from "./components/styles";
import { apiId } from "./env";
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { signedIn: false, name: "", photoUrl: "" };
  // }
  // signIn = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       androidClientId: apiId,
  //       scopes: ["profile", "email"],
  //     });
  //     if (result.type === "success") {
  //       this.setState({
  //         signedIn: true,
  //         name: result.user.name,
  //         photoUrl: result.user.photoUrl,
  //       });
  //     } else {
  //       console.log("cancelled");
  //     }
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };
  render() {
    return (
      <View style={styles.container}>
        <LoggedInPage />
      </View>
    );
  }
}
