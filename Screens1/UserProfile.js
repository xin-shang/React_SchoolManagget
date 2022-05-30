import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';

const UserProfile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
      backgroundColor: "#fff",
      flex: 1,
      //flexDirection: "row",
      //justifyContent: "center",
      //alignItems: "center"
    }}>
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        }}>
          <Button title="Achievements" onPress={() => navigation.navigate('Achievements')}/>
          <Button title="Friends" onPress={() => navigation.navigate('Friends')}/>
          <Button title="Store" onPress={() => navigation.navigate('Store')}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
export default UserProfile;