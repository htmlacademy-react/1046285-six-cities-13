import { useEffect, SyntheticEvent } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction, fetchFavoriteOfferAction } from '../../store/api-actions';
import { getUserInfo } from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import { UserData } from '../../types/user-data';

type LayoutProps = {
  authorizationStatus: string;
}

const Layout = ({ authorizationStatus }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useAppSelector(getUserInfo) as UserData | null;
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const currentLocation = location.pathname;
  const locations = {
    login: currentLocation.includes('login'),
    offer: currentLocation.includes('offer'),
    favorites: currentLocation.includes('favorites'),
  };

  const getClass = () => {
    let targetClass = '';

    switch (true) {
      case locations.login:
        targetClass = 'page page--gray page--login';
        break;
      case locations.offer:
        targetClass = 'page';
        break;
      case locations.favorites:
        if (favoriteOffers.length > 0) {
          targetClass = 'page';
        } else {
          targetClass = 'page page--favorites-empty';
        }
        break;
      default:
        targetClass = 'page page--gray page--main';
    }

    return targetClass;
  };

  const requireFavoriteOffers = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOfferAction());
    }
  };

  const handleSignOut = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  const handleToFavorite = (evt: SyntheticEvent) => {
    evt.preventDefault();
    requireFavoriteOffers();
    navigate(AppRoute.Favorites);
  };

  useEffect(() => {
    requireFavoriteOffers();
  }, []);

  return (
    <div
      className={getClass()}
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to={`${AppRoute.Main}`}
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
                            <div
                              style={{
                                borderRadius: '50%',
                                backgroundImage: `url(${userInfo ? userInfo.avatarUrl : '../img/avatar.svg'})`
                              }}
                              className="header__avatar-wrapper user__avatar-wrapper"
                            >
                            </div>
                            <span className="header__user-name user__name">
                              {userInfo?.email}
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
