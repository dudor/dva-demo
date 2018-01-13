import {login} from '../services/api'

export default {
  namespace: 'login',
  state: {
    status: undefined
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * login({payload}, {call, put}) {  // eslint-disable-line
      const response = yield call(login, payload)
      console.log(response);
      yield put({
        type: 'changeLoginState',
        payload: response.data
      });
    }
  },

  reducers: {
    changeLoginState(state, action) {
      console.log('changeLoginState', action);
      return {
        ...state,
        ...action.payload
      };
    },
  },


}
