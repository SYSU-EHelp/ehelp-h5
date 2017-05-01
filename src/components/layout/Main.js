import React, {PropTypes} from 'react';

import Header from './Header';
import styles from './Main.less';

function Main({
  children, location, history
}) {

  const headerTitle = children.props.route.title;
  const headerRightContent = children.props.route.rightContent;
  
  return (
    <div className={styles.normal}>
      <Header 
        location={location} 
        history={history}
        title={headerTitle}
        rightContent={headerRightContent}
         />
      { children }
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
