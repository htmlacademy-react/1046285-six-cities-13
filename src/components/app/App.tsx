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
import { OfferDetails } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offers: Offer[];
  offersDetails: OfferDetails[];
  reviews: Review[];
};

const App = ({ offers, offersDetails, reviews }: AppProps) => (

  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Layout authorizationStatus={AuthorizationStatus.Auth} />}>
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={
            <OfferPage
              offers={offers}
              offersDetails={offersDetails}
              reviews={reviews}
            />
          }
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
