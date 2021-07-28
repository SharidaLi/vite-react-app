import Config from '@/Config'

// session
export const session = {
  set: (name: string, data: any) => window.sessionStorage.setItem(`${Config.prefix}${name}`, JSON.stringify(data)),
  get: (name: string) => JSON.parse(window.sessionStorage.getItem?.(`${Config.prefix}${name}`)!),
  del: (name: string) => window.sessionStorage.removeItem(`${Config.prefix}${name}`),
};

// localStorage
export const localStore = {
  set: (name: string, data: any) => window.localStorage.setItem(`${Config.prefix}${name}`, JSON.stringify(data)),
  get: (name: string) => JSON.parse(window.localStorage.getItem?.(`${Config.prefix}${name}`)!),
};
