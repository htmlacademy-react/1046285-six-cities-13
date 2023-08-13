import { useEffect, SyntheticEvent } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, DefaultCity } from '../../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../../store/api-actions';

type LayoutProps = {
  authorizationStatus: string;
}

const Layout = ({ authorizationStatus }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const city = useAppSelector((state) => state.city);
  const currentLocation = location.pathname;

  const handleSignOut = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  useEffect(() => {
    navigate(`${DefaultCity.name}`);
  }, []);

  return (
    <div
      className={
        `page ${!currentLocation.includes('offer' || 'favorites') ? 'page--gray' : ''} ${currentLocation.includes('offer') ? '' : (currentLocation.includes('login') ? 'page--login' : 'page--main')}`
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
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    (
                      <ul className="header__nav-list">
                        <li className="header__nav-item user">
                          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                            <span className="header__user-name user__name">
                              Oliver.conner@gmail.com
                            </span>
                            <span className="header__favorite-count">3</span>
                          </Link>
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
                      </ul>
                    ) :
                    (
                      <ul className="header__nav-list">
                        <li className="header__nav-item user">
                          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                            <span className="header__login">Sign in</span>
                          </Link>
                        </li>
                      </ul>
                    )
                }
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
