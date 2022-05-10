import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

const CoursePage = ({ navigation }) => {
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
          <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
            <CollapseHeader>
              <Text>This Week:</Text>
            </CollapseHeader>
            <CollapseBody>
                <Text>Lecture</Text>
                <Text>Class</Text>
                <Text>Quiz</Text>
            </CollapseBody>
          </Collapse>
          <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
            <CollapseHeader>
              <Text>Tasks:</Text>
            </CollapseHeader>
            <CollapseBody>
              <Text>Lecture</Text>
              <Text>Class</Text>
              <Text>Quiz</Text>
            </CollapseBody>
          </Collapse>
          <Button title="Press" onPress={() => navigation.navigate('User Profile')}/>
      </View>

      {/* Start of Navbar */}
      <View style={{
        backgroundColor: "red",
        flex: .1,
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
export default CoursePage;