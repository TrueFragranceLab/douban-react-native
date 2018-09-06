import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { RematchDispatch, RematchRootState } from '@rematch/core'
import { models } from '../store'
import { movieItem } from '../models/movies'
import DBMovieList from '../components/businessComponents/DBMovieList'

const mapState = (state: RematchRootState<models>) => ({
  movies: state.movies.movies,
})

const mapDispatch = (dispatch: RematchDispatch<models>) => ({
  asyncLoadMovieData: () => dispatch.movies.asyncLoadMovieData(),
})

interface Props
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation: any
  movies: [movieItem]
  asyncLoadMovieData: () => void
  _pressHandler: (id: string) => void
}

class HomePage extends React.Component<Props> {
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
      <View style={{ flex: 1 }}>
        <DBMovieList
          movies={this.props.movies}
          pressHandler={this._pressHandler}
        />
      </View>
    )
  }

  _pressHandler(id: string): void {
    console.log(id)
  }

  componentDidMount() {
    const { asyncLoadMovieData } = this.props
    asyncLoadMovieData()
  }
}

export default connect(
  mapState as any,
  mapDispatch as any,
)(HomePage)
