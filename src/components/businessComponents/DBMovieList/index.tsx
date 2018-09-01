import React from 'react'
import { Text, FlatList } from 'react-native'

interface IItem {
  name: string
}

type Props = {
  movies: [IItem]
}

const DBMoiveList: React.SFC<Props> = props => {
  return (
    <FlatList
      data={props.movies}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  )
}

module.exports = DBMoiveList
