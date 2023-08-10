import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, DefaultCity } from '../../const';
import { useAppSelector } from '../hooks';

type LayoutProps = {
  authorizationStatus: string;
}

const Layout = ({ authorizationStatus }: LayoutProps) => {
  const navigate = useNavigate();
  const city = useAppSelector((state) => state.city);

  useEffect(() => {
    navigate(`/${DefaultCity.name}`);
  }, []);

  return (
    <div className="page page--gray page--main">
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
                        <a className="header__nav-link" href="#">
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
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export { Layout };
