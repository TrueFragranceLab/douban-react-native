import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState, MoiveState } from '../reducers/state'
import { ActionTypes } from '../actions/movie'

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    marginBottom: 25,
  },
})

const mapStateToProps = (state: { movies: MoiveState[] }) => {
  return {
    movies: state.movies,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getMovieDataRequest: () =>
      dispatch({ type: ActionTypes.GET_MOVIE_REQUEST }),
  }
}

interface Props {
  navigation: any
  movies: RootState['movies']
  getMovieDataRequest: () => void
}

type State = {}

const FirstRoute: React.SFC<{ movies: MoiveState[] }> = ({ movies }) => (
  <View>
    {movies.map((item, idx) => (
      <Text key={idx}>{item.title}</Text>
    ))}
  </View>
)

const SecondRoute = () => <View />

class HomePage extends React.Component<Props, State> {
  static navigationOptions = {
    title: '豆瓣电影首页',
  }

  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: '正在热映',
      },
      {
        key: 'second',
        title: '即将上映',
      },
    ],
  }

  goTo(pageName: string) {
    this.props.navigation.navigate(pageName)
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <TabView
          navigationState={this.state}
          renderTabBar={props => (
            <TabBar
              {...props}
              // pressColor="red"
              // labelStyle={{ color: '#000000' }}
              // tabStyle={{ backgroundColor: '#ffffff' }}
              indicatorStyle={{ backgroundColor: 'red' }}
            />
          )}
          renderScene={SceneMap({
            first: () => <FirstRoute movies={this.props.movies} />,
            second: SecondRoute,
          })}
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    )
  }

  componentDidMount() {
    const { getMovieDataRequest } = this.props
    getMovieDataRequest()
  }
}

export default connect(
  mapStateToProps as any,
  mapDispatchToProps as any,
)(HomePage)
