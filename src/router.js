import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute } from 'dva/router';
import {Icon} from 'antd-mobile';
import Main from './components/layout/Main';

import Index from './routes/Index';
import Page01 from './routes/Page01';
import Page02 from './routes/Page02';
import Page03 from './routes/Page03';

import Tabs from './routes/Tabs'


/**
 * 暂时不提供 定制话的leftbutton  leftButtn自动判断当前是否可以返回
 * 可以在route里面传递 title  和 rightButton
 * 表示头部需要渲染的 tittle 和 rightButton
 */


function RouterConfig({
  history
}) {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Tabs}  rightContent= {<Icon type="search" />} title="首页" />
        <Route path="/page01" component={Page01} />
        <Route path="/page02" component={Page02} />
        <Route path="/page03" component={Page03} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
