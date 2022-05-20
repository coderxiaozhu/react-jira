/**
 * 登录和注册的切换页面
 */

import React, { memo } from 'react';
import { XZunauthWapper } from './style';
import XZlogin from '../login';
import XZregister from '../register';

const Unauthenticated = memo(() => {
    return <XZunauthWapper>Unauthenticated</XZunauthWapper>;
});

export default Unauthenticated;
