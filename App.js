import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Registration from './components/Registration';
export default function App() {
  return (
    <View style={styles.container}>
      <Registration/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
