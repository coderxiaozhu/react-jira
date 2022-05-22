import React, { memo } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../customHook/useAuth';
import { get, remove } from '../../request/storage';

import { HomeheaderWapper } from './style';

const XZhomeHeader: React.FC = memo(() => {
    const navigate = useNavigate();

    // 获取用户名
    const user = JSON.parse(get('userInfo'));

    // 获取删除token的方法
    const { loginOut } = useAuth();

    const headerLoginOut = () => {
        loginOut();
        remove('userInfo');
        navigate('/login');
    };

    return (
        <HomeheaderWapper>
            <div className="left">
                <div className="leftLogo"></div>
                <div className="project">项目</div>
                <div className="projectCrew">成员</div>
            </div>
            <div className="right">
                <span style={{ marginRight: '20px' }}>Hi, {user?.name}</span>
                <Button type={'primary'} onClick={() => headerLoginOut()}>
                    登出
                </Button>
            </div>
        </HomeheaderWapper>
    );
});

export default XZhomeHeader;
