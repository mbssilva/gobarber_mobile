import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <View>
        <Text>Hello Dashboard</Text>
      </View>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color} />,
};
