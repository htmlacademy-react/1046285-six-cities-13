import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app/App';

import { offers } from './mocks/offers';

const Setting = {
  OffersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      offers={offers}
    />
  </React.StrictMode>
);
