import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.55)',
            keyboardHidesTabBar: true,
            style: {
              backgroundColor: '#8d41a8',
              height: 60,
              paddingBottom: 8,
            },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={Dashboard.navigationOptions}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={Profile.navigationOptions}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
          headerMode="none"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
