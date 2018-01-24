import {routerRedux} from 'dva/router'

export default {
  namespace: 'app',
  state: {
    user: {},
    permissions: {},
    menu: {},
    menuPopoverVisible: false,
    siderFold: localStorage.getItem('siderFold') === 'true',
    darkTheme: localStorage.getItem('darkTheme') === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem('navOpenKeys')) || []
  },
  subscriptions: {
    setup({dispatch}) {
      let timer;
      window.onresize = e => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
          //dispatch({type:''});
        },500);
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
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    switchSider(state) {
      localStorage.setItem('siderFlod', !state.siderFold);
      return {
        ...state,
        siderFold: !state.siderFold
      }
    },
    switchTheme(state) {
      localStorage.setItem('darkTheme', !state.darkTheme);
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    },
    switchMenuPopver(state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible
      }
    },
    handleNavbar(state, {payload}) {
      return {
        ...state,
        isNavbar: payload
      }
    },
    handleNavOpenKeys(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
}

