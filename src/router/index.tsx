import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { get } from '../request/storage';

// const App = React.lazy(() => import('../App'));
const Login = React.lazy(() => import('../pages/unauthenticated'));
const List = React.lazy(() => import('../pages/list'));
const Task = React.lazy(() => import('../pages/task'));
const Board = React.lazy(() => import('../pages/board'));
const Home = React.lazy(() => import('../pages/home'));
const About = React.lazy(() => import('../pages/about'));

const lazyLoad = (children: React.ReactNode) => {
    return <Suspense fallback={<>loding....</>}>{children}</Suspense>;
};

const token = get();

const Rootrouter = [
    {
        path: '/',
        element: token ? <Navigate to={'/home'} /> : <Navigate to={'/login'} />
    }
];

const leftRouter = [
    {
        path: '/home',
        key: 'home',
        element: lazyLoad(<Home />),
        children: [
            {
                path: '/home/list',
                element: lazyLoad(<List />)
            },
            {
                path: '/home/about',
                element: lazyLoad(<About />)
            },
            {
                path: '/home/task',
                element: lazyLoad(<Task />)
            },
            {
                path: '/home/board',
                element: lazyLoad(<Board />)
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

const router = [...Rootrouter, ...leftRouter, ...loginRouter];

export { router };
