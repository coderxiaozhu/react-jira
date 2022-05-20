export const localStorageKey = '__auth_provider_token__';

// 添加token
export const add = (token: string) => {
    window.localStorage.setItem(localStorageKey, token);
};

// 获取token
export const get = (): string | any => {
    return window.localStorage.getItem(localStorageKey);
};

// 清除token
export const remove = () => {
    window.localStorage.removeItem(localStorageKey);
};
