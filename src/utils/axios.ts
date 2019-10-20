import axios, {AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse} from 'axios';
import config from '@/config'; // @代表src一级目录，是我们在vue.config.js文件里配置的
const {api: {devApiBaseUrl, proApiBaseUrl}} = config;
// process.env.NODE_ENV 是vue服务内置的环境变量，有俩值，当本地开发时是development，当打包时是production
const apiBaseUrl = process.env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;
export interface ResponseData {
    code: number;
    data?: any;
    msg: string;
}
class HttpRequest {// 定义一个接口请求类，用于创建一个aixos请求实例
    constructor(public baseUrl: string = apiBaseUrl) { // 类接收一个字符串参数，是接口请求的基本路径
        this.baseUrl = baseUrl;
    }
    public request(options: AxiosRequestConfig): AxiosPromise{ // 我们实际调用接口的时候调用实例的这个方法，返回一个axiospromise
        // 使用aixos.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性
        const instance: AxiosInstance = axios.create();
        options = this.mergeConfig(options); // 合并基础路径和每个接口单独传入的配置
        // 调用interceptors 方法使拦截器生效
        this.interceptors(instance, options.url);
        return instance(options); // 最后返回AixosPromise
    }
    private interceptors(instance: AxiosInstance, url?: string) { // 定义这个函数用于添加全局请求和响应拦截逻辑
        // 添加请求和响应拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use((res: AxiosResponse) => {
            const {data} = res;
            const {code, msg} = data
            if(code !== 0){
                console.error(msg)
            }
            return res;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig { // 这个方法用于合并基础路径配置和接口单独配置
        return Object.assign({baseUrl: this.baseUrl}, options);
    }
}
export default HttpRequest;
