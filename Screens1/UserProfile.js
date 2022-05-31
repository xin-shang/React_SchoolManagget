import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import * as React from 'react';
import { Avatar } from 'react-native-paper';

const UserProfile = ({ navigation }) => {
  return (
      <View style={styles.mainWrapper}>
        <View style={styles.profileWrapper}>
          <Avatar.Icon size={120} backgroundColor="#0052a0" icon="account"/>
          <View style={styles.profileStatsWrapper}>
            <Text style={styles.title}>Points: 0000</Text>
            <Text style={styles.title}>Coins: 0000</Text>
          </View>
        </View>
        <View style={styles.achievementsWrapper}>
          <View style={styles.sectionAchievementsText}>
            <Text style={styles.title}>Achievements</Text>
            <Text style={styles.subTitle} onPress={() => navigation.navigate('Achievements')}>See All</Text>
          </View>
          <View style={styles.sectionAchievements}>
            <Avatar.Icon style={styles.achievementIcon} size={100} icon="trophy"/>
            <Avatar.Icon style={styles.achievementIcon} size={100} icon="trophy-award"/>
            <Avatar.Icon style={styles.achievementIcon} size={100} icon="trophy-variant"/>
          </View>
        </View>
        <View style={styles.friendsWrapper}>
          <View style={styles.sectionFriendsText}>
            <Text style={styles.title}>Recently Viewed</Text>
            <Text style={styles.subTitle} onPress={() => navigation.navigate('Friends')}>See All</Text>
          </View>
          <View style={styles.sectionFriends}>
            <Avatar.Icon style={styles.friendIcon} size={100} icon="account"/>
            <Avatar.Icon style={styles.friendIcon} size={100} icon="account"/>
            <Avatar.Icon style={styles.friendIcon} size={100} icon="account"/>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 15,
    width: '100%',
  },
  profileWrapper: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  profileStatsWrapper: {
    marginTop: 15,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementsWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  sectionAchievementsText: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionAchievements: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  achievementIcon: {
    borderRadius: 10,
    backgroundColor: "#0052a0",
  },
  friendsWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  sectionFriendsText: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionFriends: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  friendIcon: {
    backgroundColor: "#0052a0",
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 12,
    textAlignVertical: "bottom",
    textDecorationLine: 'underline',
  },
  

});
export default UserProfile;