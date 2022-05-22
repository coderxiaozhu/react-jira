import { message } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { get } from '../request/storage';

const useCheckToken = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const gotoLogin = pathname.includes('login') || pathname.includes('register');
    useEffect(() => {
        if (get('__auth_provider_token__')) {
            if (gotoLogin) {
                navigate('/home/list');
            }
        } else {
            if (!gotoLogin) {
                message.warning('请您先登录');
                navigate('/login');
            }
        }
    }, []);
};

export default useCheckToken;
