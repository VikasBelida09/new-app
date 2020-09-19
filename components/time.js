import React from "react";
import { Text } from "react-native";
import moment from "moment";
const time = (props) => {
  const time = moment(props.publishedAt || moment.now()).fromNow();
  return (
    <Text note style={{ marginHorizontal: 10 }}>
      {time}
    </Text>
  );
};

export default time;
