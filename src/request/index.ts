import axios from 'axios';
import NProgress from 'nprogress';
import { message } from 'antd';

const baseURL = process.env.REACT_APP_API_URL;

const request = axios.create({
    timeout: 5000,
    baseURL
});

request.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config;
    },
    (err) => {
        NProgress.done();
        return Promise.reject(err);
    }
);

request.interceptors.response.use(
    (res) => {
        NProgress.done();
        return res.data;
    },
    (err) => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    message.error('用户名不存在~');
                    break;
                case 401:
                    message.error('未授权访问');
                    break;
                default:
                    message.error('网络请求错误');
            }
        }
        NProgress.done();
        return Promise.reject(err);
    }
);

export default request;
