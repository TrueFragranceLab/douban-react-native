
import React from 'react';
import { View, Button } from 'react-native';

const styles = {
  container: {
    marginBottom: 25
  }
}

class HomePage extends React.Component {
  static navigationOptions = {
    title: '豆瓣电影首页',
  };

  constructor (props) {
    super(props)
    this.goToDetailsPage = this.goTo.bind(this, 'Details')
    this.goToSearchPage = this.goTo.bind(this, 'Search')
  };

  goTo (pageName) {
    this.props.navigation.navigate(pageName)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={ styles.container }>
          <Button
            title="前往详细页"
            onPress={this.goToDetailsPage}
          />
        </View>
        <View style={ styles.container }>
          <Button
            title="前往搜索页"
            onPress={this.goToSearchPage}
          />
        </View>
      </View>
    );
  }
}

export default HomePage