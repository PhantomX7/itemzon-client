import axios from 'axios';
import { AUTH_USER } from './constants';

let ROOT_URL = '';
if (process.env.NODE_ENV === 'development') {
  ROOT_URL = 'http://localhost:8000';
}

export function getMe() {
  return async dispatch => {
    try {
      getMeApi(dispatch);
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
}

export async function getMeApi(dispatch) {
  const { data } = await axios.get(`${ROOT_URL}/api/me`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  dispatch({
    type: AUTH_USER,
    payload: data,
  });
}
