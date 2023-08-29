import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/user-process/selectors';

type FavoriteToggleProps = {
  isFavorite: boolean;
  parentType?: string;
  onChangeFavoriteStatus: (status: number) => void;
};

const FavoriteToggle = memo(({ isFavorite, parentType, onChangeFavoriteStatus }: FavoriteToggleProps) => {
  const navigate = useNavigate();
  const [favoriteStatus, setfavoriteStatus] = useState<boolean>(isFavorite);
  const authStatus = useAppSelector(getAuthStatus);

  const getClass = () => parentType ? 'place-card' : 'offer';

  const handleChangeFavoriteStatus = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      setfavoriteStatus((prevfavoriteStatus) => !prevfavoriteStatus);
      onChangeFavoriteStatus(Number(!favoriteStatus));
    } else {
      navigate(AppRoute.Login);
    }
  };


  return (
    <button
      onClick={handleChangeFavoriteStatus}
      className={`${getClass()}__bookmark-button button ${getClass()}__bookmark-button${favoriteStatus && authStatus === AuthorizationStatus.Auth ? '--active' : ''}`}
      type="button"
    >
      <svg
        className={`${getClass()}__bookmark-icon`}
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
});

FavoriteToggle.displayName = 'FavoriteToggle';

export { FavoriteToggle };
