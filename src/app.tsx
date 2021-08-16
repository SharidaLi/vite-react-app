import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Routes from '@/routes/Route';
import '@/styles/index.css';
import stores from '@/stores';

import '@/utils/BroadcastChannel';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 窗口获得焦点时重新获取数据
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
