// export const localStorageKey = '__auth_provider_token__';

// 添加token
export const add = (localStorageKey: string, token: string) => {
    window.localStorage.setItem(localStorageKey, token);
};

// 获取token
export const get = (localStorageKey: string): string | any => {
    return window.localStorage.getItem(localStorageKey);
};

// 清除token
export const remove = (localStorageKey: string) => {
    window.localStorage.removeItem(localStorageKey);
};
