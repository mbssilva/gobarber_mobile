import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await api.get('/appointments');

        setAppointments(response.data.rows);
      } catch (err) {}
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`/appointments/${id}`);

      setAppointments(
        appointments.map((appointment) =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: response.data.canceled_at,
              }
            : appointment
        )
      );
    } catch (err) {}
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

function DashboardTabIcon({ color }) {
  return <Icon name="event" size={22} color={color} />;
}

Dashboard.navigationOptions = {
  tabBarLabels: 'Agendamentos',
  tabBarIcon: DashboardTabIcon,
};

DashboardTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};
