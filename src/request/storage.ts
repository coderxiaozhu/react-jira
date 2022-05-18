import { UserResponse } from '../network/login/loginType';

const localStorageKey = '__auth_provider_token__';

// 添加token
export const add = (user: UserResponse) => {
    window.localStorage.setItem(localStorageKey, user.user.token);
};

// 获取token
export const get = () => {
    return window.localStorage.getItem(localStorageKey);
};

// 清除token
export const remove = () => {
    window.localStorage.removeItem(localStorageKey);
};
