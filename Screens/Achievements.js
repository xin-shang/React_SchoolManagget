import { View,StyleSheet,Text } from 'react-native';

import AchiecvementCard from '../components/AchievementCard';

const Achievements = ({ navigation }) => {
    return (
    <View>
        <View style={styles.achievementsWrapper}>
            <Text style={styles.title}>Achievement Earned:  12/100</Text>
            <Text style={styles.title}>Great start! Keep going!</Text>
        </View>
        <View style={styles.achievementsWrapper}>
            <View style={styles.sectionAchievements}>
                <AchiecvementCard icon="trophy" color="#0052a0"/>
                <AchiecvementCard icon="trophy-award" color="grey"/>
                <AchiecvementCard icon="trophy-variant" color="gold"/>
            </View>
        </View>
        <View style={styles.achievementsWrapper}>
            <View style={styles.sectionAchievements}>
                <AchiecvementCard icon="trophy-award" color="silver"/>
                <AchiecvementCard icon="trophy-variant" color="orange"/>
                <AchiecvementCard icon="trophy" color="blue"/>
            </View>
        </View>
        <View style={styles.achievementsWrapper}>
            <View style={styles.sectionAchievements}>
                <AchiecvementCard icon="trophy-variant" color="red"/>
                <AchiecvementCard icon="trophy" color="green"/>
                <AchiecvementCard icon="trophy-award" color="purple"/>
            </View>
        </View>
        <View style={styles.achievementsWrapper}>
            <View style={styles.sectionAchievements}>
                <AchiecvementCard icon="trophy-award" color="cyan"/>
                <AchiecvementCard icon="trophy-variant" color="magenta"/>
                <AchiecvementCard icon="trophy" color="black"/>
            </View>
        </View>
        
    </View>
    
    );
}

const styles = StyleSheet.create({
achievementsWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
},
  sectionAchievements: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
});

export default Achievements;