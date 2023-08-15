import { useEffect, SyntheticEvent } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, DefaultCity } from '../../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction, fetchFavoriteOfferAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';

type LayoutProps = {
  authorizationStatus: string;
}

const Layout = ({ authorizationStatus }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const city = useAppSelector((state) => state.city);
  const userEmail = useAppSelector((state) => state.userEmail);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const currentLocation = location.pathname;
  const locations = {
    login: currentLocation.includes('login'),
    offer: currentLocation.includes('offer'),
    favorites: currentLocation.includes('favorites'),
  };

  const requireFavoriteOffers = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOfferAction());
    }
  };

  const handleSignOut = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const handleToFavorite = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(redirectToRoute(AppRoute.Favorites));
    requireFavoriteOffers();
  };

  useEffect(() => {
    requireFavoriteOffers();
    navigate(`${DefaultCity.name}`);
  }, []);

  return (
    <div
      className={
        `page ${locations.offer || locations.favorites ? '' : 'page--gray'} ${locations.login ? 'page--login' : ''} ${locations.offer || locations.login || locations.favorites ? '' : 'page--main'}`
      }
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to={`/${city.name}`}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            {
              currentLocation !== AppRoute.Login &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    authorizationStatus === AuthorizationStatus.Auth ? (
                      <>
                        <li className="header__nav-item user">
                          <a
                            onClick={handleToFavorite}
                            className="header__nav-link header__nav-link--profile"
                            href=""
                          >
                            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                            <span className="header__user-name user__name">
                              {userEmail}
                            </span>
                            {
                              favoriteOffers.length > 0 && (
                                <span className="header__favorite-count">{favoriteOffers.length}</span>
                              )
                            }
                          </a>
                        </li>
                        <li className="header__nav-item">
                          <a
                            onClick={handleSignOut}
                            className="header__nav-link"
                            href=""
                          >
                            <span className="header__signout">Sign out</span>
                          </a>
                        </li>
                      </>
                    ) : (
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__login">Sign in</span>
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export { Layout };
