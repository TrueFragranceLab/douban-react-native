import React from "react";
import { View, Text } from "react-native";

class SearchPage extends React.Component {
  static navigationOptions = {
    title: "豆瓣电影搜索页"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>搜索页 🔍</Text>
      </View>
    );
  }
}

export default SearchPage;
