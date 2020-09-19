import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Body,
  Left,
  Right,
  Title,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
import { Text, View } from "react-native";
export default class TabsScreen extends Component {
  state = { loading: true };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    console.log("ia m herer");
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Hiiii</Text>
        </View>
      );
    }
    return (
      <Container>
        <Header style={{ backgroundColor: "#009387" }} hasTabs>
          <Left />
          <Body>
            <Title style={{ color: "white" }}>New App</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Sports"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
//api key:54a618e87970492e8fd0d2d170a3229b
