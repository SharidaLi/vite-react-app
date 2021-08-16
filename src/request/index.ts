import axios from 'axios'

enum MethodEnum {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}

const http = (method: keyof typeof MethodEnum, path: string, data: {} = {}) => {
  const url = import.meta.env.DEV ? `/api${path}` : path;

  return new Promise((resolve, reject) => {
    if (method === 'get') {
      axios({
        method,
        url,
        params: data,
      }).then((res) => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    } else {
      axios({
        method,
        url,
        data,
      }).then((res) => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    }
  })
}

const ajax = {
  get: (url: string, data?: any) => http('get', url, data),
  post: (url: string, data?: any) => http('post', url, data),
  put: (url: string, data?: any) => http('put', url, data),
  delete: (url: string, data?: any) => http('delete', url, data),
}

export default ajax