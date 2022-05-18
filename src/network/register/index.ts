import { UserProps } from '../login/loginType';
import request from '../../request';

export const register = (data: UserProps) => {
    return request({
        url: '/register',
        method: 'POST',
        data
    });
};
