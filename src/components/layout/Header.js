import React, {PropTypes} from 'react';
import {NavBar, Icon} from 'antd-mobile';

import styles from './Header.less';

//针对 browserhistory
function canBack(location) {
  return location.pathname !== '/';
}

function Header({
  location, history, title, rightContent
}) {

  console.log(location);
  console.log(history);
  var isCanBack = canBack(location);
  return (
    <div className={styles.normal}>
      <NavBar
        leftContent={isCanBack ? "返回" : ''}
        iconName={isCanBack ? "left" : false}
        mode="light"
        onLeftClick={isCanBack ? () => { history.goBack()} : null }
        rightContent={rightContent || null}
      >
        {title || ''}
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
