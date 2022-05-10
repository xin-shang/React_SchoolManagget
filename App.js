import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registration from './Screens/Registration';
import Login from './Screens/Login'
import CoursePage from './Screens/CoursePage'
import UserProfile from './Screens/UserProfile'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen name="Registration" component={Registration}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Course Page" component={CoursePage}/>
      <Stack.Screen name="User Profile" component={UserProfile}/>
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
