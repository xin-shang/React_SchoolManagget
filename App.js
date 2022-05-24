import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

import StudyTimer1 from './Screens/StudyTimer1';
import StudyTimer2 from './Screens/StudyTimer2';
import StudyTimer3 from './Screens/StudyTimer3';
import TimerSelector from './Screens/TimerSelector'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />

      {/* Might move to a different screen */}
      <Stack.Screen name="TimerSelector" component={TimerSelector} />
      <Stack.Screen name="Study Timer1" component={StudyTimer1} />
      <Stack.Screen name="Study Timer2" component={StudyTimer2} />
      <Stack.Screen name="Study Timer3" component={StudyTimer3} />
    </Stack.Navigator>
  );
}

function CourseStack() {
  return (
    <Stack.Navigator initialRouteName="Course Select">
      <Stack.Screen name="Course Select" component={CourseSelect} />
      <Stack.Screen name="Course Page" component={CoursePage} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  );
}

function CalendarStack() {
  return (
    <Stack.Navigator initialRouteName="Calendar">
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Calendar Item" component={CalendarItem} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="User Profile">
      <Stack.Screen name="User Profile" component={UserProfile} />
      <Stack.Screen name="Achievements" component={Achievements} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="Store" component={Store} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen
          name="Home Stack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="CourseStack"
          component={CourseStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Courses',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-education"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="CalendarStack"
          component={CalendarStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
