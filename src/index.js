import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import {browserHistory} from 'dva/router'
import {message} from 'antd'

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(error) {
    console.log("app error:", error);
    message.error('系统错误，'+error.message);
  }
});

// 2. Plugins
// app.use({});
app.use(createLoading({effected: true}));

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/login').default);
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
