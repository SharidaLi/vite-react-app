import { useLocation } from "react-router-dom"

/**
 * 获取 url 传递过来的参数
 * @returns 查询参数对象
 */
export const getParams = () => {
  const queries = new URLSearchParams(useLocation()?.search);
  const params: { [x: string]: string } = {};
  queries.forEach((val, key) => {
    params[key] = val;
  })
  return params;
}

/**
 * 获取 url 传递过来的参数
 * @param name 要获取的参数 name
 * @returns 参数的值
 */
export const getParamByName = (name: string) => {
  return getParams()?.[name];
}