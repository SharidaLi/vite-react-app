import React, { useEffect } from 'react';
import styles from './index.module.less';
import { Alert } from 'antd';
import axios from 'axios';

import { WarningTwoTone } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/store';
import { getAdministration } from 'mobx/dist/internal';

const Foo = observer(() => {
  const counterStore = useStores('counterStore');
  const bannerStore = useStores('bannerStore');
  const { bannerList } = bannerStore;
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await bannerStore.getListAsync(0);
  }

  return (
    <div
      className={styles.page}
      onClick={() => {
        console.log(counterStore.counter);
      }}
    >
      {/* <Alert message='Warning Text' type='warning' /> */}
      <Alert
        message='Warning'
        description='This is a warning notice about copywriting.'
        type='warning'
        closable
      />
      {bannerList?.map((el) => {
        return <div key={el.imageUrl}>{el.imageUrl}</div>;
      })}
    </div>
  );
});
export default Foo;
