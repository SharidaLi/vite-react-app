import counterStore from './counter';
import commonStore from './common';
import bannerStore from './banner';

const _store = {
  counterStore,
  commonStore,
  bannerStore,
};

export type StoreType = typeof _store;

export default _store;
