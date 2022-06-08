import { View, Button, Text, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard'

const Home = ({ navigation }) => {
    return (
    <View style={{
        alignContent: "center",
        //justifyContent: "center",
        backgroundColor: "#0052a0",
        flex:1
    }}>
        <Text style={styles.headings}>Don't Forget</Text>
        <CourseCard title="INFT1020" body="Assignment on..." day="14" month="Apr" time="2359"/>
        <CourseCard title="DATA6756" body="Quiz on..." day="16" month="Apr" time="2300"/>
        <CourseCard title="DATA6756" body="Assignment on..." day="20" month="Apr" time="2359"/>

        <View style={{
            flex:.25,
            marginTop: 10,
            justifyContent: "flex-end"
            
        }}>
            <Button title="Study Timer" onPress={() => navigation.navigate('TimerSelector')}/>
            <Button title="In Game Store" onPress={() => navigation.navigate('Store')}/>
            
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    headings: {
      fontSize: 30,
      color: "#fff",
    },
  });

export default Home; 