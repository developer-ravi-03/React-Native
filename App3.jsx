import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // flexDirection: 'row', //it works according main axis
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'stretch',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  box1: {
    // flex: 1,
    width: 80,
    height: 80,
    // alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  box2: {
    // flex: 2,
    height: 80,
    width: 80,
    backgroundColor: 'green',
  },
  box3: {
    // flex: 3,
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
});
