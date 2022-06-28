import { View, Button, Text, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard'

/*

The home page is the main hub for each user. 
The base view method displays upcoming assignments and tasks. These are hardcoded as they
require database functionality to automatically update as tasks get completed. 

There are two buttons to allow users to go to the Store and the Study Timer. 

*/

const Home = ({ navigation }) => {
    return (
    <View style={{
        alignContent: "center",
        //justifyContent: "center",
        backgroundColor: "#0052a0",
        flex:1
    }}>
        <Text style={styles.headings}>Don't Forget</Text>
        <View style={styles.cardWrapper}>
            <CourseCard title="INFT1020" body="Assignment on..." day="14" month="Apr" time="2359"/>
            <CourseCard title="DATA6756" body="Quiz on..." day="16" month="Apr" time="2300"/>
            <CourseCard title="DATA6756" body="Assignment on..." day="20" month="Apr" time="2359"/>
        </View>

        <View style={{
            flex: 1,
            justifyContent: "flex-end"
            
        }}>
            <Button title="Study Timer" onPress={() => navigation.navigate('TimerSelector')}/>
            <Button title="In Game Store" onPress={() => navigation.navigate('Store')}/>
            
        </View>
    </View>
    );
}
/*

Basic style sheet that allows the buttons and text to be stylised
correctly on the page without overlap

*/

const styles = StyleSheet.create({
    headings: {
      fontSize: 30,
      color: "#fff",
    },
    cardWrapper: {
        alignItems: 'center'
        
    }
  });

export default Home; 