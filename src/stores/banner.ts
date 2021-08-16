import { observable } from 'mobx';
import axios from 'axios';

export interface BannerStore {
  counter: number;
  bannerList: { imageUrl: string }[];
  increment: () => void;
  decrement: () => void;
  getListAsync: (type?: number) => void;
}

const bannerStore: BannerStore = observable({
  counter: 0,
  bannerList: [],

  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  async getListAsync(type: number = 0) {
    const res = await axios('/api/banner', { params: { type } })
    return res;
  },
});

export default bannerStore;
