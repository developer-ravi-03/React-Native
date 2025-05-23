import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{gap: 10}}
      horizontal
      style={styles.container}>
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
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  box1: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  box2: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  box3: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
});
