import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import XZhomeHeader from '../../components/home-header';

const XZhome = memo(() => {
    // state hook

    // other hook

    // binding event
    return (
        <div>
            <XZhomeHeader />
            <Outlet />
        </div>
    );
});

export default XZhome;
