import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <View>
        <Text>Hello Profile</Text>
      </View>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color} />,
};
