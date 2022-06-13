import { View, Button, Text, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard'

const Home = ({ navigation }) => {
    return (
    <View style={{
        alignContent: "center",
        backgroundColor: "#0052a0",
        flex:1
    }}>
        <Text style={styles.headings}>Don't Forget</Text>
            <CourseCard title="INFT1020" body="Assignment on..." day="14" month="Apr" time="2359"/>
            <CourseCard title="DATA6756" body="Quiz on..." day="16" month="Apr" time="2300"/>
            <CourseCard title="DATA6756" body="Assignment on..." day="20" month="Apr" time="2359"/>
            <View style={{height: 295}}>

            </View>
            <Button title="Study Timer" onPress={() => navigation.navigate('TimerSelector')}/>
    </View>
    );
}

const styles = StyleSheet.create({
    headingcontainer: {
      flex: 1,
      backgroundColor: "#0052a0",
      flexDirection: "column",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

export default Home;