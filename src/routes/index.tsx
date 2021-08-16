import React from 'react';
import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  // 重定向的使用方法
  // {
  //   path: '/',
  //   exact: true,
  //   render: () => <Redirect to={'/h5'} />,
  // },
  {
    path: '/',
    component: loadable(() => import('@/layout')),
    routes: [
      {
        path: '/',
        exact: true,
        title: '首页',
        component: loadable(() => import('@/pages/index')),
      },
      {
        path: '/login',
        exact: true,
        title: '登录',
        component: loadable(() => import('@/pages/login')),
      },
      {
        path: '/about',
        exact: true,
        title: '关于',
        component: loadable(() => import('@/pages/about')),
      },
      {
        path: '/foo',
        exact: true,
        title: 'foo',
        component: loadable(() => import('@/pages/foo')),
      },
    ],
  },
];

export default routes;
