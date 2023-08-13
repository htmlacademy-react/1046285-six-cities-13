import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Layout } from '../layout/layout';
import { MainPage } from '../pages/main-page/main-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { LoginPage } from '../pages/login-page/login-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { LoadingPage } from '../pages/loading-page/loading-page';
import { PrivateRoute } from '../private-route/private-route';
import { OfferDetails } from '../../types/offer';
import { Review } from '../../types/review';
import { useAppSelector } from '../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppProps = {
  offersDetails: OfferDetails[];
  reviews: Review[];
};

const App = ({ offersDetails, reviews }: AppProps) => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout authorizationStatus={authorizationStatus} />}>
          <Route
            index
            path={AppRoute.Main}
            element={
              <MainPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
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
    </HistoryRouter>
  );
};

export { App };
