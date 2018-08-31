import React from 'react'
import { View, Button, Text } from 'react-native'
import { getMovieList } from '../services/movie'
const styles = {
  container: {
    marginBottom: 25,
  },
}

type Props = {
  navigation: any,
}

// type State = {
//   movie: Object,
// }

class HomePage extends React.Component<Props, any> {
  static navigationOptions = {
    title: '豆瓣电影首页',
  }

  constructor(props: Props) {
    super(props)
    // this.goToDetailsPage = this.goTo.bind(this, 'Details')
    // this.goToSearchPage = this.goTo.bind(this, 'Search')
  }

  goTo(pageName: string) {
    this.props.navigation.navigate(pageName)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}>
          <Button title="前往详细页" onPress={() => this.goTo('Details')} />
        </View>
        <View style={styles.container}>
          <Button title="前往搜索页" onPress={() => this.goTo('Search')} />
        </View>
      </View>
    )
  }

  componentDidMount() {
    getMovieList('top')
      .then(res => res.json())
      .then(res => {
        alert(res.subjects)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default HomePage
