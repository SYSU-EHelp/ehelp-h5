import './index.html';
import './index.less';
import dva from 'dva';

import { browserHistory } from 'dva/router';
Object.assign(browserHistory, {
  goSmartBack: (backRoute) => {
    if (window.history.length > 1) {
      browserHistory.goBack();
    } else {
      browserHistory.push(backRoute || '/');
    }
  },
});


// 1. Initialize
const app = dva({
  history: browserHistory,
});


// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
