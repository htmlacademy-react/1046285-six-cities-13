import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';

import { Layout } from '../layout/layout';
import { MainPage } from '../pages/main-page/main-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { LoginPage } from '../pages/login-page/login-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { PrivateRoute } from '../private-route/private-route';

import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
};

const App = ({ offers }: AppProps) => (

  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route
          index
          element={
            <MainPage
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  </BrowserRouter>
);

export { App };
