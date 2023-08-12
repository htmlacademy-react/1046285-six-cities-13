import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Layout } from '../layout/layout';
import { MainPage } from '../pages/main-page/main-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { LoginPage } from '../pages/login-page/login-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { PrivateRoute } from '../private-route/private-route';
import { OfferDetails } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offersDetails: OfferDetails[];
  reviews: Review[];
};

const App = ({ offersDetails, reviews }: AppProps) => (

  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Layout authorizationStatus={AuthorizationStatus.Auth} />}>
        <Route
          index
          path={AppRoute.Main}
          element={
            <MainPage/>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage/>
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
