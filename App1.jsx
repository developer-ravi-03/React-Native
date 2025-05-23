import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {use} from 'react';

const App = () => {
  //it is method of  javascript object of css
  // const style = {
  //   container: {
  //     height: '100%',
  //     width: '100%',
  //     backgroundColor: 'black',
  //     paddingTop: 30,
  //   },
  // };

  return (
    // on the place of View we use safe srea view for notchable automatically
    <SafeAreaView style={styles.container}>
      {/* hello */}
      <Text style={{color: 'white', fontSize: 20}}>Radhe Radhe🙏🙏</Text>
      <Text style={styles.text}>Jai Shree Krishna🙏🙏</Text>

      {/* for image  */}
      <Image
        style={{height: 250, width: 150}}
        source={{
          uri: 'https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg',
        }}
      />

      {/* for button  */}
      {/* method 1 for button add  */}
      <Button title="Touch me"></Button>

      {/* method 2 for button add  */}
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'green'}}
        onPress={() => Alert.alert('Pressed!!')}>
        <Text>Button</Text>
      </TouchableOpacity>

      {/* method 3 for button add  */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

// background-color - kabab case
// backgroundColor - Camel case

//rect native stylesheet method of passing style
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    paddingTop: 30,
    gap: 10,
  },
  text: {color: 'white', fontSize: 20},
  button: {
    width: 120,
    passing: 10,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
