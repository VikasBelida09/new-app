import React from "react";
import { View, Text, Dimensions, Modal, Share } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Icon,
  Right,
  Button,
  Title,
} from "native-base";
import { WebView } from "react-native-webview";
const webViewHeight = Dimensions.get("window").height - 46;
const ModalComponent = (props) => {
  const handleClose = () => {
    return props.onClose();
  };
  const handleShare = () => {
    const { url, title } = props.articleData;
    const message = `${title}\n\n Read More @${url}\n\n Shared via News App`;
    return Share.share(
      {
        title,
        message,
        url: message,
      },
      {
        dialogTitle: `Share ${title}`,
      }
    );
  };
  const { showModal, articleData } = props;
  const { url } = articleData;
  if (url !== undefined) {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={handleClose}
      >
        <Container
          style={{ margin: 15, marginBottom: 6, backgroundColor: "#fff" }}
        >
          <Header style={{ backgroundColor: "#009387" }}>
            <Left>
              <Button onPress={handleClose} transparent>
                <Icon name="close" style={{ color: "white", fontSize: 12 }} />
              </Button>
            </Left>
            <Body>
              <Title children={articleData.title} style={{ color: "white" }} />
            </Body>
            <Right>
              <Button onPress={handleShare} transparent>
                <Icon name="share" style={{ color: "white", fontSize: 12 }} />
              </Button>
            </Right>
          </Header>
          <Content
            contentContainerStyle={{
              height: webViewHeight,
              overflowY: "scroll",
            }}
          >
            <WebView
              source={{ uri: url }}
              style={{ flex: 1, overflowY: "scroll" }}
              onError={handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    );
  } else {
    return null;
  }
};

export default ModalComponent;
