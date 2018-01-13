import request from '../utils/request';

export async function login(params) {
  return request('/api/login', {
    method: 'POST',
    body: JSON.stringify(params),
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  })
}

