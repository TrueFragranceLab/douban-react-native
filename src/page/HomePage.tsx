import React from 'react'
import { View, Button, Text } from 'react-native'
import { getMovieList } from '../services/movie'
import { connect } from 'react-redux'
import { RootState, TodoState } from '../reducers/state'

type storeState = { todos: TodoState }

const mapStateToProps = (state: storeState) => {
  return {
    todos: state.todos,
  }
}
const styles = {
  container: {
    marginBottom: 25,
  },
}

type Props = {
  navigation: any
  todos: RootState['todos']
}

// type State = {
//   movie: Object,
// }

class HomePage extends React.Component<any, any> {
  static navigationOptions = {
    title: '豆瓣电影首页',
  }

  constructor(props: any) {
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
        <View>
          {this.props.todos.map((item, idx) => (
            <Text key={idx}>{item.id}</Text>
          ))}
        </View>
        <View style={styles.container}>
          <Button title="前往详细页" onPress={() => this.goTo('Details')} />
        </View>
        <View style={styles.container}>
          <Button title="前往搜索页" onPress={() => this.goTo('Search')} />
        </View>
      </View>
    )
  }

  // componentDidMount() {
  //   getMovieList('top')
  //     .then(res => res.json())
  //     .then(res => {
  //       alert(res.subjects)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
}

export default connect(mapStateToProps)(HomePage)
