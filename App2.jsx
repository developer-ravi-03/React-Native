import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: isDarkMode ? '#000' : '#fff',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
