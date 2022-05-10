import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

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
        backgroundColor: "dodgerblue",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        }}>
      </View>
      {/* Start of Navbar */}
      <View style={{
        backgroundColor: "red",
        flex: .10,
        flexDirection: "row"
        }}>
          <View style={{
            backgroundColor: "pink",
            flex: 1
          }}></View>
          <View style={{
            backgroundColor: "orange",
            flex: 1
          }}></View>
          <View style={{
            backgroundColor: "purple",
            flex: 1
          }}></View>
          <View style={{
            backgroundColor: "green",
            flex: 1
          }}></View>
          <View style={{
            backgroundColor: "red",
            flex: 1
          }}></View>
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