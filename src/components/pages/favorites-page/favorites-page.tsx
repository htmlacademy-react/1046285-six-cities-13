import { FavoriteList } from '../../favorite-list/favorite-list';
import { OfferCardType } from '../../../const';
import { useAppSelector } from '../../hooks';

const FavoritesPage = () => {
  const offers = useAppSelector((state) => state.offers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <FavoriteList
          offers={offers}
          cardsType={OfferCardType.Favorite}
        />
      </div>
    </main>
  );
};

export { FavoritesPage };
