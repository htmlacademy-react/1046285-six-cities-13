import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app/App';

import { offers } from './mocks/offers';
import { offersDetails } from './mocks/offers-details';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      offersDetails={offersDetails}
      reviews={reviews}
    />
  </React.StrictMode>
);
