import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import {AuthProvider} from './Context/AuthContext';
import {FetcherProvider} from './Context/FetcherContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FetcherProvider>
        <App />
      </FetcherProvider>
    </AuthProvider>
  </React.StrictMode>
    ,
  document.getElementById('root')
);



