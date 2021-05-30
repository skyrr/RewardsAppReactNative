/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ajax from '../ajax';
import RewardsList from './RewardsList';

class App extends React.Component {
  state = {
    rewards: [],
  }
  async componentDidMount() {
    const rewards = await ajax.fetchInitialRewards();
    this.setState({ rewards });
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Rewards App</Text>
        {
          this.state.rewards.length > 0
          ? <RewardsList rewards={this.state.rewards}></RewardsList>
          : <Text style={styles.text}>...loading</Text>
        }
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
