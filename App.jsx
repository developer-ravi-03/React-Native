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
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    // on the place of View we use safe srea view for notchable automatically
    <SafeAreaView>
      {/* hello */}
      <Text>Hello kaise ho </Text>
      <Text>Thik hu </Text>
      <Text>Tum Kaise ho </Text>

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
      <Pressable style={{padding: 10, backgroundColor: 'yellow'}}>
        <Text>Press Me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

// background-color - kabab case
// backgroundColor - Camel case

const styles = StyleSheet.create({});
