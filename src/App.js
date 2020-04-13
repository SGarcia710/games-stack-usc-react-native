import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import GameOneScreen from './screens/GameOne';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
          name="Signup"
          options={{headerShown: false}}
          component={SignupScreen}
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
