import ajax from "@/request";

/**
 * 手机号密码登录
 * @param params 手机号，密码
 */
export const getLogin = (params: { phone: number, password: string }) => ajax.post('/login/cellphone', params);

/**
 * 获取用户的登录状态
 */
export const getStatus = () => ajax.get('/login/status');
