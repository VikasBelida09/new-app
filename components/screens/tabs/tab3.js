import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import { getArticles } from "../../../services/news";
import { Alert, View, ActivityIndicator, Text } from "react-native";
import DataItem from "../../dataItem";
import ModalComponent from "../../Modal";
export default class tab3 extends Component {
  state = {
    isLoading: true,
    data: null,
    modalVisible: false,
    modalArticleData: {},
  };
  handleItemDataOnPress = (articleData) => {
    this.setState({ modalVisible: true, modalArticleData: articleData });
  };
  handleModalClose = () => {
    this.setState({ modalVisible: false, modalArticleData: {} });
  };
  componentDidMount() {
    getArticles("technology")
      .then((res) => {
        this.setState({ isLoading: false, data: res });
      })
      .catch((err) => {
        Alert.alert("Error", "Something went wrong");
        console.log(err);
      });
  }
  render() {
    console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>loading...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
