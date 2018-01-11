import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(error) {
    console.log("app error:", error);
  }
});

// 2. Plugins
// app.use({});
app.use(createLoading({ effected: true }));

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
