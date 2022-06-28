// Please note this screen is not currently in use within the app
// This screen was an alternate version of the course page that went unused
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';

// Importing the accordian list libraries
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

// Importing the course card from components folder
import CourseCard from '../components/CourseCard';

const CoursePageSeeAll = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "#0052a0",
        flex: 1,
        //alignItems: "center",
        //justifyContent: "center",
        width: "100%"
        }}>
          {/* Collapsable menu */}
          <Collapse style={styles.collapse}>
            {/* Menu title */}
            <CollapseHeader>
              <Text style={styles.collapseheading}>This Week:</Text>
            </CollapseHeader>
            {/* Body Containing course cards */}
            <CollapseBody>
              <ScrollView>
                <CourseCard title="Testing" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test2" body="More body" day="22" month="Jan" time="2215"/>
              </ScrollView>
            </CollapseBody>
          </Collapse>

          {/* Collapsable Menu */}
          <Collapse style={styles.collapse}>
            {/* Menu Title */}
            <CollapseHeader>
              <Text style={styles.collapseheading}>Tasks:</Text>
            </CollapseHeader>
            {/* Body containing course cards */}
            <CollapseBody>
            {/* Testing scroll view with lots of course cards */}
              <ScrollView style={{height: "90%"}}>
                <CourseCard title="Test1" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test2" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test3" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test4" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test5" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test6" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test7" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test8" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test9" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test10" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test11" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test12" body="More body" day="22" month="Jan" time="2215"/>
                <CourseCard title="Test13" body="Some longer body text" day="14" month="Apr" time="2230"/>
                <CourseCard title="Test14" body="More body" day="22" month="Jan" time="2215"/>
              </ScrollView>
            </CollapseBody>
          </Collapse>
      </View>
    </SafeAreaView>
  );
}
// Definition of app styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  collapse: {
    borderBottomWidth:1,
    borderTopWidth:1,
    width: "100%",
    margin: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  collapseheading: {
    fontSize: 30
  },
});
export default CoursePageSeeAll;