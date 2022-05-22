import React, { memo } from 'react';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../customHook/useAuth';
import { XZregisterWapper } from './style';
import { XZLongBtn } from '../login/style';

const XZregister = memo(() => {
    // state hook

    // other hook
    const { registerProvider } = useAuth();
    const navigate = useNavigate();

    // binding Event
    const OnFinish = (values: { username: string; password: string }) => {
        registerProvider(values);
        navigate('/home');
    };
    return (
        <XZregisterWapper>
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
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码输入不一致!'));
                            }
                        })
                    ]}
                >
                    <Input
                        placeholder={'确认密码'}
                        type={'confirmPassword'}
                        id={'confirmPassword'}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <XZLongBtn type="primary" htmlType="submit">
                        注册
                    </XZLongBtn>
                </Form.Item>
            </Form>
        </XZregisterWapper>
    );
});

export default XZregister;
