import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>真香警告！11！！</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
