import { FavoriteList } from '../../favorite-list/favorite-list';

import { OfferCardType } from '../../../const';

import { Offer } from '../../../types/offer';

type FavoritesPageProps = {
  offers: Offer[];
};

const FavoritesPage = ({offers}: FavoritesPageProps) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <FavoriteList
        offers={offers}
        cardsType={OfferCardType.Favorite}
      />
    </div>
  </main>
);

export { FavoritesPage };
