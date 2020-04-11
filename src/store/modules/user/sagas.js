import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const aux = rest.oldPassword ? rest : {};

    const profile = {
      name,
      email,
      avatar_id,
      ...aux,
    };

    const response = yield call(api.put, '/users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.tron.error(err);

    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil! Verifique seus dados'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
