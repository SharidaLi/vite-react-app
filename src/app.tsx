import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '@/routes/Route';
import '@/styles/index.css';

import '@/utils/BroadcastChannel'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
