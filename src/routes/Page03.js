import React, {PropTypes} from 'react';
import {connect} from 'dva';

import styles from './Page03.less';

function Page03({
  location
}) {
  return (
    <div className={styles.normal}>
      Route Component: Page03
    </div>
  );
}

Page03.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page03);
