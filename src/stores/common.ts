import { makeAutoObservable, observable } from 'mobx';

class CommonStore {
  title = '';
  theme = 'default';
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setLoading(show: boolean) {
    this.loading = show;
  }
}

export default new CommonStore();
