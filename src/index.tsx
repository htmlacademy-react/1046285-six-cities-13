import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/App';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>
);
