import {routerRedux} from 'dva/router'

export default {
  namespace: 'app',
  state: {},
  subscriptions: {
    setup({dispatch, history}) {
      window.onresize = e => {
      }

      if (true) {
        dispatch(routerRedux.push({pathname: '/login'}));
      }
    }
  },
  effects: {
    * logout({payload}, {call, put, select}) {
      yield put(routerRedux.push({pathname: '/login'}))
    }
  },
  reducers:{
    loginSuccess(state,action){
      return {...state,...action.payload};
    },
    logoutSuccess(state,action){
      return {...state}
    }
  }
}

