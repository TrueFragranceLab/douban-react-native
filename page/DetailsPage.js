import React from "react";
import { View, Text } from "react-native";

class DetailsPage extends React.Component {
  static navigationOptions = {
    title: "豆瓣电影详细页"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>这里是详细页</Text>
      </View>
    );
  }
}

export default DetailsPage;
