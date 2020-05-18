import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

/* Redux */
import {Provider} from 'react-redux';
import {store} from './redux';

/* React Navigation */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './utils/RootNavigation';

/* Screens */
import LandingScreen from './screens/Landing';
import LoginScreen from './screens/Login';
import MenuScreen from './screens/Menu';
import RegisterStudentScreen from './screens/RegisterStudent';
import StudentsListScreen from './screens/StudentsList';
import GamesMenuScreen from './screens/GamesMenu';
import GameOneScreen from './screens/GameOne';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* NavigationRef es para tener acceso a las funciones del Navigation en
      componentes que no estén en el Router. */}
      <NavigationContainer ref={navigationRef}>
        <StatusBar hidden={true} />
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            options={{headerShown: false}}
            component={LandingScreen}
          />
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
            name="StudentsList"
            options={{headerShown: false}}
            component={StudentsListScreen}
          />
          <Stack.Screen
            name="GameOne"
            options={{headerShown: false}}
            component={GameOneScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
