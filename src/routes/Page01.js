import React, {PropTypes} from 'react';
import {connect} from 'dva';

import styles from './Page01.less';

function Page01({
  location
}) {
  return (
    <div className={styles.normal}>
      Route Component: Page01
    </div>
  );
}

Page01.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page01);
