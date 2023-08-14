import { FavoritesEmptyPage } from '../favorites-empty-page/favorites-empty-page';
import { FavoriteList } from '../../favorite-list/favorite-list';
import { OfferCardType } from '../../../const';
import { useAppSelector } from '../../hooks';

const FavoritesPage = () => {
  const offers = useAppSelector((state) => state.favoriteOffers);

  return offers.length ? (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <FavoriteList
          offers={offers}
          cardsType={OfferCardType.Favorite}
        />
      </div>
    </main>
  ) :
  (
    <FavoritesEmptyPage />
  );
};

export { FavoritesPage };
