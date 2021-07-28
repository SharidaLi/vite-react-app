import axios from 'axios';
import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

const Layout: React.FC<RouteConfigComponentProps> = React.memo(function Layout(
  props
) {
  const { route } = props;

  route?.routes?.forEach((el) => {
    if (el.path === window.location.pathname) {
      document.title = el.title;
    }
  });

  return <>{renderRoutes(route?.routes)}</>;
});

export default Layout;
