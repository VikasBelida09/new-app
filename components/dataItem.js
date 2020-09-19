import React, { Component } from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
} from "native-base";
import Time from "./time";
export class dataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: this.data.urlToImage }} />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 6,
            }}
          >
            <Text note>{this.data.source.name}</Text>
            <Time publishedAt={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default dataItem;
