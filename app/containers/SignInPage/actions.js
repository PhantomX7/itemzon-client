/*
 *
 * LoginPage actions
 *
 */
import axios from 'axios';
import { push } from 'react-router-redux';
import { SET_TOKEN } from '../App/constants';
import { getMeApi } from '../App/actions';
let ROOT_URL = '';
if (process.env.NODE_ENV === 'development') {
  ROOT_URL = 'http://localhost:8000';
}

export function signin(values) {
  const { email, password } = values;
  return async dispatch => {
    const { data } = await axios.post(`${ROOT_URL}/auth/signin`, {
      email,
      password,
    });
    localStorage.setItem('token', data.token);
    dispatch({ type: SET_TOKEN, payload: data.token });
    getMeApi(dispatch);
    dispatch(push('/'));
  };
}
