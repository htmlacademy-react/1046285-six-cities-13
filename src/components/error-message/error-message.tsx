import { isError } from '../../store/app-process/selectors';
import { useAppSelector } from '../hooks';
import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(isError);

  return (error) ?
    <div className={styles['error-message']}>
      {error}
    </div>
    : null;
}

export default ErrorMessage;
