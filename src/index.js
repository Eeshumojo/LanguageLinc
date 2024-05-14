import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
ReactDOM.render(
  <Auth0Provider
  domain="dev-4k6mr1g3mxb680gv.jp.auth0.com"
  clientId="ZdPjvVNu0ckSfWG3Drwzo6Ztjr3LFu0v"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App/>
</Auth0Provider>,
  document.getElementById('root')
);


