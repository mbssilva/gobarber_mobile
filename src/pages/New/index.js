import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import Confirm from './Confirm';

const Stack = createStackNavigator();

function New() {
  return (
    <Stack.Navigator
      initialRouteName="SelectProvider"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={SelectProvider.navigationOptions}
      />
      <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

New.navigationOptions = {
  tabBarVisible: false,
  tabBarLabel: 'Agendar',
  tabBarIcon: () => (
    <Icon
      name="add-circle-outline"
      size={22}
      color="rgba(255, 255, 255, 0.55)"
    />
  ),
};

export default New;
