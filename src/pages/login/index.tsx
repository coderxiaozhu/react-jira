import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from '../../customHook/useAuth';

const XZlogin = memo(() => {
    // state hook

    // other hook
    const { user, loginProvider } = useAuth();

    // binding Event
    const OnFinish = (values: { username: string; password: string }) => {
        loginProvider(values);
    };
    return <div>XZlogin</div>;
});

export default XZlogin;
