import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Registration from './Screens/Registration';
import Login from './Screens/Login';
import CoursePage from './Screens/CoursePage';
import UserProfile from './Screens/UserProfile';
import Home from './Screens/Home';
import CourseSelect from './Screens/CourseSelect';
import Achievements from './Screens/Achievements';
import Store from './Screens/InGameStore';
import Friends from './Screens/Friends';
import CalendarNick from './Screens/CalendarNick';
import CalendarItem from './Screens/CalendarScreen';
import StudyTimer1 from './Screens/StudyTimer1';
import StudyTimer2 from './Screens/StudyTimer2';
import StudyTimer3 from './Screens/StudyTimer3';
import TimerSelector from './Screens/TimerSelector';


//Create the base objects for using the Stack Navigator

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//Create each stack that holds the screens together when navigating
//to that page. 
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
      <Stack.Screen name="Calendar" component={CalendarNick} />
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


//Add the bottom tabs that display each tab across the bottom of the app. 
//Each will call on the relevant stack and open the respective screen. 

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
