// 
import React from "react";

// 声明拓展件
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';


// 声明其他JS文件位置
import HomeScreen from './screen/HomeScreen';
import { ScreenStack } from "react-native-screens";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <ScreenStack.Navigation>

          <ScreenStack.Screen name = "Home" component = {HomeScreen} />

        </ScreenStack.Navigation>
      </NavigationContainer>
    </PaperProvider>
  );
}