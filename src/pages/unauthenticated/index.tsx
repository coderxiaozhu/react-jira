/**
 * 登录和注册的切换页面
 */
import React, { memo, useState } from 'react';
import { Divider } from 'antd';

import { XZunauthWapper, XZbackground, XZshadowCard } from './style';
import XZlogin from '../login';
import XZregister from '../register';

const Unauthenticated = memo(() => {
    // state hook
    const [isLogin, setIsLogin] = useState<boolean>(true);

    // other hook

    // binding Event
    return (
        <XZunauthWapper>
            <header />
            <XZbackground />
            <XZshadowCard>
                <h2>{isLogin ? '请登录' : '请注册'}</h2>
                {isLogin ? <XZlogin /> : <XZregister />}
                <Divider />
                <div className="changeText" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? '没有账号？注册新账号' : '已经有账号了？直接登录'}
                </div>
            </XZshadowCard>
        </XZunauthWapper>
    );
});

export default Unauthenticated;
