import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

import Loading from '@/components/Loading';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/store';

const Layout: React.FC<RouteConfigComponentProps> = React.memo(
  observer(function Layout(props) {
    const { route } = props;

    const { loading } = useStores('commonStore');

    route?.routes?.forEach((el) => {
      if (el.path === window.location.pathname) {
        document.title = el.title;
      }
    });
    return (
      <>
        {loading && <Loading />}
        {renderRoutes(route?.routes)}
      </>
    );
  })
);

export default Layout;
