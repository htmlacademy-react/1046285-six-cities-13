import { Link } from 'react-router-dom';

import styles from './error-page.module.css';

const ErrorPage = () => (
  <main className={styles['error-page']}>
    <h1 className="error-page__title">404. Page not found</h1>
    <br />
    <p className="error-page__text">
      Back to&nbsp;
      <Link className={styles['error-page__link']} to="/">
        main page
      </Link>
    </p>
  </main>
);

export { ErrorPage };
