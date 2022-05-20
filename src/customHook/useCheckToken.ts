import { message } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { get } from '../request/storage';

const useCheckToken = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    useEffect(() => {
        const gotoLogin = pathname.includes('login') || pathname.includes('register');
        if (get()) {
            if (gotoLogin) {
                navigate('/home');
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
