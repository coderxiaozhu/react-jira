import request from "../../request";
import { UserProps } from './loginType'

export const login = (loginInfo: UserProps) => {
    return request({
        url: '/login',
        method: 'POST',
        data: loginInfo
    })
}