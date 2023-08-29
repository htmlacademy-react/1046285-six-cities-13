import { useRef, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../../store/api-actions';
import { Link } from 'react-router-dom';
import { changeCity } from '../../../store/app-process/app-process';
import { getRandomCityName } from '../../../utils/getRandomCityName';

const LoginPage = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCityName = getRandomCityName();

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      loginRef.current?.value &&
      passwordRef.current?.value.match(/[a-z, а-я]/gi)?.length &&
      passwordRef.current?.value.match(/[0-9]/g)?.length
    ) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const handleClick = () => {
    dispatch(changeCity(randomCityName));
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: Sign in</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            onSubmit={handleSubmit}
            className="login__form form"
            action=""
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div
            className="locations__item"
            onClick={handleClick}
          >
            <Link
              className="locations__item-link"
              to={`/${randomCityName}`}
            >
              <span>{randomCityName}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export { LoginPage };
