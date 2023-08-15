import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../../const';
import { fetchFavoriteOfferAction } from '../../store/api-actions';

type FavoriteToggleProps = {
  isFavorite: boolean;
  parentType?: string;
  onChangeFavoriteStatus: (status: number) => void;
};

const FavoriteToggle = ({ isFavorite, parentType, onChangeFavoriteStatus }: FavoriteToggleProps) => {
  const dispatch = useAppDispatch();
  const [favoriteStatus, setfavoriteStatus] = useState<boolean>(isFavorite);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const getClass = () => parentType ? 'place-card' : 'offer';

  const handleChangeFavoriteStatus = () => {
    setfavoriteStatus((prevfavoriteStatus) => !prevfavoriteStatus);
    onChangeFavoriteStatus(Number(!favoriteStatus));
    dispatch(fetchFavoriteOfferAction());
  };


  return authStatus === AuthorizationStatus.Auth && (
    <button
      onClick={handleChangeFavoriteStatus}
      className={`${getClass()}__bookmark-button button ${getClass()}__bookmark-button${favoriteStatus ? '--active' : ''}`}
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
};

export { FavoriteToggle };
