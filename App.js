import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from './Screens/Registration';
import Login from './Screens/Login'
import CoursePage from './Screens/CoursePage'
import UserProfile from './Screens/UserProfile'
import Home from './Screens/Home'
import CourseSelect from './Screens/CourseSelect'
import Achievements from './Screens/Achievements'
import Friends from './Screens/Friends'
import Store from './Screens/Store'
import Calendar from './Screens/Calendar'
import CalendarItem from './Screens/CalendarItem'
import StudyTimer from './Screens/StudyTimer'
import Settings from './Screens/Settings'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Registration" component={Registration}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Course Select" component={CourseSelect}/>
      <Stack.Screen name="Course Page" component={CoursePage}/>
      <Stack.Screen name="User Profile" component={UserProfile}/>
      <Stack.Screen name="Achievements" component={Achievements}/>
      <Stack.Screen name="Friends" component={Friends}/>
      <Stack.Screen name="Store" component={Store}/>
      <Stack.Screen name="Calendar" component={Calendar}/>
      <Stack.Screen name="Calendar Item" component={CalendarItem}/>
      <Stack.Screen name="Study Timer" component={StudyTimer}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
