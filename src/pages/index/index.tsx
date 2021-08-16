import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';

import { getStatus } from '@/services/user';
import { useStores } from '@/hooks/store';

const Index = observer(() => {
  const { isLoading, isError, data, error } = useQuery('status', getStatus);
  const commonStore = useStores('commonStore');

  useEffect(() => {
    commonStore.setLoading(isLoading);
  }, [isLoading]);

  return <div>hello world</div>;
});
export default Index;
