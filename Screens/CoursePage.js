import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

import CourseCard from '../components/CourseCard';

const CoursePage = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "#0052a0",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
        }}>
          <Collapse style={styles.collapse}>
            <CollapseHeader>
              <Text style={styles.collapseheading}>This Week:</Text>
            </CollapseHeader>
            <CollapseBody>
            <CourseCard title="Testing" body="Some longer body text" day="14" month="Apr" time="2230"/>
            <CourseCard title="Test2" body="More body" day="22" month="Jan" time="2215"/>
            </CollapseBody>
          </Collapse>
          <Collapse style={styles.collapse}>
            <CollapseHeader>
              <Text style={styles.collapseheading}>Tasks:</Text>
            </CollapseHeader>
            <CollapseBody>
            <CourseCard title="Test2" body="Some longer body text" day="14" month="Apr" time="2230"/>
            <CourseCard title="Test4" body="More body" day="22" month="Jan" time="2215"/>
            </CollapseBody>
          </Collapse>
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
  collapse: {
    borderBottomWidth:1,
    borderTopWidth:1,
    width: "100%",
    margin: 1,
  },
  collapseheading: {
    fontSize: 30
  },
});
export default CoursePage;