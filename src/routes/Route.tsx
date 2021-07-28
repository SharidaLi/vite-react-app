import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom'; // 切换为 hash 路由
import { renderRoutes } from 'react-router-config';
import routes from '@/routes';

export default function Routes() {
  return <Router> {renderRoutes(routes)} </Router>;
}
