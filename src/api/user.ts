// 登陆接口请求方法
import axios, {ResponseData} from './index';
import {AxiosPromise} from 'axios';
interface LoginReqInterface {
    user_name: string;
    password: number | string;
}
export const loginReq = (data: LoginReqInterface): AxiosPromise<ResponseData> => {
    return axios.request({url: '/api/user/login', data, method: 'POST'});
};

