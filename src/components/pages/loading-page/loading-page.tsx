import styles from './loading-page.module.css';

const LoadingPage = () => (
  <div className={styles['spin-wrapper']}>
    <div className={styles['spinner']}></div>
  </div>
);

export { LoadingPage };
