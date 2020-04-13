import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return <Background />;
}

SelectProvider.navigationOptions = ({ navigation }) => {
  return {
    title: 'Selecione o prestador',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      >
        <View>
          <Icon name="chevron-left" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};
