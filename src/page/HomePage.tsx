import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState, MoiveState } from '../reducers/state'
import { getMovieData } from '../actions/movie'

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 25,
  },
})

const mapStateToProps = (state: { movies: MoiveState }) => {
  return {
    movies: state.movies,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ getMovieData }, dispatch),
  }
}

interface Props {
  navigation: any
  movies: RootState['movies']
  actions: {
    getMovieData: () => any
  }
}

type State = {}

@(connect(
  mapStateToProps,
  mapDispatchToProps,
) as any)
class HomePage extends React.Component<Props, State> {
  static navigationOptions = {
    title: '豆瓣电影首页',
  }

  goTo(pageName: string) {
    this.props.navigation.navigate(pageName)
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <View>
          {this.props.movies.map((item, idx) => (
            <Text key={idx}>{item.title}</Text>
          ))}
        </View>
      </View>
    )
  }

  componentDidMount() {
    const { actions } = this.props
    actions.getMovieData()
  }
}

export default HomePage
