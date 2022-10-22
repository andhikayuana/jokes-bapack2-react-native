import React, { useEffect, useReducer, useCallback } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { getRandom } from './api/jokesbapack2';
import Jokes from "./components/Jokes";
import { actionCreators, initialState, reducer } from './reducers/jokes'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { joke, loading, error } = state

  const fetchJokes = useCallback(async () => {
    dispatch(actionCreators.loading())

    try {
      const joke = await getRandom()
      dispatch(actionCreators.success(joke))
    } catch (e) {
      dispatch(actionCreators.failure())
    }
  }, [])

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <View>
      <TouchableHighlight
        style={styles.container}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={fetchJokes}>
        <Jokes content={joke.data}></Jokes>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
