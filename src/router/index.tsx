import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { get } from '../request/storage';
const Login = React.lazy(() => import('../pages/unauthenticated'));
const List = React.lazy(() => import('../pages/list'));
const Task = React.lazy(() => import('../pages/task'));
const Board = React.lazy(() => import('../pages/board'));
const Home = React.lazy(() => import('../pages/home'));
const About = React.lazy(() => import('../pages/about'));

const lazyLoad = (children: React.ReactNode) => {
    return <Suspense fallback={<>loding....</>}>{children}</Suspense>;
};

const token = get('__auth_provider_token__');

const checkToken = (element: React.ReactNode) => {
    return token ? element : <Navigate to={'/login'} />;
};

// const Rootrouter = [
//     {
//         path: '/',
//         element: token ? <Navigate to={'/home/list'} /> : <Navigate to={'/login'} />
//     }
// ];

const leftRouter = [
    {
        path: '/home',
        key: 'home',
        element: checkToken(lazyLoad(<Home />)),
        children: [
            {
                path: '/home/list',
                element: checkToken(lazyLoad(<List />))
            },
            {
                path: '/home/about',
                element: checkToken(lazyLoad(<About />))
            },
            {
                path: '/home/task',
                element: checkToken(lazyLoad(<Task />))
            },
            {
                path: '/home/board',
                element: checkToken(lazyLoad(<Board />))
            }
        ]
    }
];

const loginRouter = [
    {
        path: '/login',
        element: lazyLoad(<Login />)
    }
];

const router = [...leftRouter, ...loginRouter];

export { router };
