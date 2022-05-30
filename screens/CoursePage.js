import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

import CourseCard from '../components/CourseCard';

const CoursePage = ({ navigation }) => {
  return (
    <SafeAreaView 
      style={{
      backgroundColor: "#0052a0",
      flex: 1,
      padding: 5
    }}>
      <View>
        <View style={styles.headingcontainer}>
          <Text style={styles.headings}>This Week:</Text>
          <Text style={styles.body} onPress={()=> console.log("pressed this week")}>See all</Text>
        </View>
          <ScrollView horizontal={true}>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
          </ScrollView>
          <View style={styles.headingcontainer}>
            <Text style={styles.headings}>Priority:</Text>
            <Text style={styles.body} onPress={()=> console.log("pressed priority")}>See all</Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
          </ScrollView>
          <View style={styles.headingcontainer}>
            <Text style={styles.headings}>Activities:</Text>
            <Text style={styles.body} onPress={()=> console.log("pressed activites")}>See all</Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
            <CourseCard title="Testing" body="Some body text for testing" day="14" month="Apr" time="2230"/>
          </ScrollView>
      </View>
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
  headingcontainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  headings: {
    fontSize: 30,
    color: "#fff",
  },
  body: {
    fontSize: 20,
    color: "#fff",
  }
});
export default CoursePage;