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
import { useAppSelector } from '../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const App = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const isFavoriteOffersDataLoading = useAppSelector((state) => state.isFavoriteOffersDataLoading);
  const isOfferDetailsDataLoading = useAppSelector((state) => state.isOfferDetailsDataLoading);

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
                {isFavoriteOffersDataLoading ? <LoadingPage /> : <FavoritesPage />}
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
              isOfferDetailsDataLoading ? <LoadingPage /> : <OfferPage/>
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
