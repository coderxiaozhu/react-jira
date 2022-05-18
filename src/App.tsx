import React, { memo } from 'react';
import { Form, Input, Button } from 'antd';
import { useAuth } from './customHook/useAuth';

const App = memo(() => {
    // state hook

    // other hook
    const { user, loginProvider } = useAuth();

    // binding Event
    const OnFinish = (values: any) => {
        loginProvider(values);
        // registerProvider(values);
    };

    return (
        <div>
            登录成功,用户名: {user && user.name}
            用户的token: {user && user.token}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={OnFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default App;
