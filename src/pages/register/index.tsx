import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from '../../customHook/useAuth';

const XZregister = memo(() => {
    // state hook

    // other hook
    const { user, registerProvider } = useAuth();

    // binding Event
    const OnFinish = (values: { username: string; password: string }) => {
        registerProvider(values);
    };
    return <div>XZregister</div>;
});

export default XZregister;
