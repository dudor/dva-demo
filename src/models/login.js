import {login} from '../services/api'
import {routerRedux} from 'dva/router'


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
    * login({payload}, {call, put, select}) {  // eslint-disable-line
      const response = yield call(login, payload)
      console.log('response:', response);
      yield put({
        type: 'changeLoginState',
        payload: response
      });
      if(response && response.success){
        yield put(routerRedux.push('/'));
      }
    },
    * logout({payload}, {call, put}) {

    }
  },

  reducers: {
    changeLoginState(state, action) {
      console.log('changeLoginState:', action);
      return {
        ...state,
        ...action.payload
      };
    },
  },


}
