import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableHighlight,
} from 'react-native'

import { movieItem } from '../../../models/movies'

type Props = {
  movies: [movieItem]
  pressHandler: (id: string) => any
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  cellImage: {
    width: 55,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  textContainer: {
    flex: 1,
  },
  director: {
    marginTop: 5,
    color: '#333333',
  },
})

class DBMoiveList extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <FlatList
        data={this.props.movies}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }

  _keyExtractor = (item: movieItem) => item.id

  _renderItem = ({ item }: ListRenderItemInfo<movieItem>) => (
    <TouchableHighlight onPress={() => this._onpress(item, this.props)}>
      <View style={styles.container} key={item.id}>
        <Image style={styles.cellImage} source={{ uri: item.images.large }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.director}>{this.directorsName(item)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  directorsName = (item: movieItem) => `导演: ${item.directors[0].name}`

  _onpress = (item: movieItem, props: Props) => props.pressHandler(item.id)
}
export default DBMoiveList
