import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing the icon library used
// Link to icon packs from this library below
// https://oblador.github.io/react-native-vector-icons/
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import of all screens used in navigation
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


// Create navigators for the app stack and bottom navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Function that runs the home stack
// These functions are called by the tab navigation to change stack elements
function HomeStack() {
  return (
    // Apps the elements to the stack and specifies the frist screen
    <Stack.Navigator initialRouteName="Login">
      {/* Creates a screen in the stack within a specific navigator
          Name is used as the reference and is what is used in navigation calls
          Component is the link to the screen itself and matches the name in import */}
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="TimerSelector" component={TimerSelector} />
      <Stack.Screen name="Study Timer1" component={StudyTimer1} />
      <Stack.Screen name="Study Timer2" component={StudyTimer2} />
      <Stack.Screen name="Study Timer3" component={StudyTimer3} />
    </Stack.Navigator>
  );
}

// Function that runs the course stack
function CourseStack() {
  return (
    <Stack.Navigator initialRouteName="Course Select">
      <Stack.Screen name="Course Select" component={CourseSelect} />
      {/* The same as creating new screens however contains an extra options paramerter
          The options parameter is being used to define the pages title based on the name
          of the route object that called it. This is what changes the course page name to
          match the name of the course selected on the course selector page  */}
      <Stack.Screen name="Course Page" component={CoursePage} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  );
}

// Function that runs the calendar stack
function CalendarStack() {
  return (
    <Stack.Navigator initialRouteName="Calendar">
      <Stack.Screen name="Calendar" component={CalendarNick} />
      <Stack.Screen name="Calendar Item" component={CalendarItem} />
    </Stack.Navigator>
  );
}

// Function that runs the profile stack
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

// The main app method that is run when the application starts
// Sets up the apps bottom navigation
export default function App() {
  return (
    // Sets up the main navigation container
    <NavigationContainer>
      {/* Defines the tab navigator */}
      <Tab.Navigator initialRouteName="Feed">
        {/* Defines the homes screens in the tab stack
          Name is used as the reference and is what is used in navigation calls
          Component points to the function name defines the screens for the stack
          Options is used to define if a header is require, the label on the tab
          bar, and the icon used on the tab bar
          The icon is from the material community icons library */}
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
        {/* Defines the course screens in the tab stack*/}
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
        {/* Defines the calendar screens in the tab stack*/}
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
        {/* Defines the profile screens in the tab stack*/}
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