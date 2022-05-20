import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const XZhome = memo(() => {
    return (
        <div>
            XZhome
            <Outlet />
        </div>
    );
});

export default XZhome;
