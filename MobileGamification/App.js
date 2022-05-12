import { StatusBar } from 'expo-status-bar';
import blockquote from 'hexo/lib/plugins/tag/blockquote';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity style = {styles.button1}>
        <Text>Calendar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    width:100,
    Height:30,
    backgroundColor: "blue",
    borderRadius:5,
    justifyContent: "center",
    alignItems: "center"
  }

});
