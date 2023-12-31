import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Layout } from '../layout/layout';
import { MainPage } from '../pages/main-page/main-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { LoginPage } from '../pages/login-page/login-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { LoadingPage } from '../pages/loading-page/loading-page';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthStatus } from '../../store/user-process/selectors';
import { isOffersLoading } from '../../store/data-process/selectors';

const App = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isOffersDataLoading = useAppSelector(isOffersLoading);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout authorizationStatus={authorizationStatus} />}>
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
                <OfferPage />
              }
            />
          </Route>
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

export { App };
