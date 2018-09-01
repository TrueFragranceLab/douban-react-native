import React from 'react'
import { View, Button, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState, MoiveState } from '../reducers/state'
import { getMovieData } from '../actions/movie'

const mapStateToProps = (state: { movies: MoiveState }) => {
  return {
    movies: state.movies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getMovieData }, dispatch),
  }
}

const styles = {
  container: {
    marginBottom: 25,
  },
}

type Props = {
  navigation: any
  movies: RootState['movies']
  actions: {
    getMovieData: () => any
  }
}

type State = {}

class HomePage extends React.Component<Props, State> {
  static navigationOptions = {
    title: '豆瓣电影首页',
  }

  constructor(props: Props) {
    super(props)
  }

  goTo(pageName: string) {
    this.props.navigation.navigate(pageName)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          {this.props.movies.map((item, idx) => (
            <Text key={idx}>{item.title}</Text>
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

  componentDidMount() {
    const { actions } = this.props
    actions.getMovieData()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
