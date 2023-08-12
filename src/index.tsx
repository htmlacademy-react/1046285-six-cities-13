import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/App';
import { offersDetails } from './mocks/offers-details';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offersDetails={offersDetails}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
