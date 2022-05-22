import React, { memo } from 'react';

import { get } from '../../request/storage';

import { HomeheaderWapper } from './style';

const XZhomeHeader: React.FC = memo(() => {
    // 获取用户名
    const user = JSON.parse(get('userInfo'));

    return (
        <HomeheaderWapper>
            <div className="left">
                <div className="leftLogo"></div>
                <div className="project">项目</div>
                <div className="projectCrew">成员</div>
            </div>
            <div className="right">Hi, {user.name}</div>
        </HomeheaderWapper>
    );
});

export default XZhomeHeader;
