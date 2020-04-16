import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import MenuScreen from './screens/Menu';
import RegisterStudentScreen from './screens/RegisterStudent';
import GamesMenuScreen from './screens/GamesMenu';
import GameOneScreen from './screens/GameOne';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="RegisterStudent"
          options={{headerShown: false}}
          component={RegisterStudentScreen}
        />
        <Stack.Screen
          name="Menu"
          options={{headerShown: false}}
          component={MenuScreen}
        />
        <Stack.Screen
          name="GamesMenu"
          options={{headerShown: false}}
          component={GamesMenuScreen}
        />
        <Stack.Screen
          name="GameOne"
          options={{headerShown: false}}
          component={GameOneScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
