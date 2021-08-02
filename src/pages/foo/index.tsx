import React from 'react';
import styles from './index.module.less';
import { Alert } from 'antd';

const Foo = () => {
  return (
    <div className={styles.page}>
      <Alert message='Warning Text' type='warning' />
    </div>
  );
};
export default Foo;
