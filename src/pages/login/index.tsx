import React, { memo } from 'react';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../customHook/useAuth';
import { XZloginWapper, XZLongBtn } from './style';

const XZlogin = memo(() => {
    // state hook

    // other hook
    const { loginProvider } = useAuth();
    const navigate = useNavigate();

    // binding Event
    const OnFinish = (values: { username: string; password: string }) => {
        loginProvider(values);
        navigate('/home');
    };
    return (
        <XZloginWapper>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={OnFinish}
                autoComplete="off"
            >
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input placeholder={'用户名'} type={'text'} id={'username'} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input placeholder={'密码'} type={'password'} id={'password'} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <XZLongBtn type="primary" htmlType="submit">
                        登录
                    </XZLongBtn>
                </Form.Item>
            </Form>
        </XZloginWapper>
    );
});

export default XZlogin;
