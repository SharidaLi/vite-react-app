import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';
import ali from '@/assets/images/ali.png';
import pc from '@/assets/images/pc.png';

const Index = () => {
  const history = useHistory();
  console.log(ali);
  console.log(pc);
  return (
    <div className={styles.page}>
      <img src={ali} />
      <img src={pc} />
    </div>
  );
};
export default Index;
