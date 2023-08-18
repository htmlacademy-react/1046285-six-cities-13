import { Helmet } from 'react-helmet-async';
import { FavoritesEmptyPage } from '../favorites-empty-page/favorites-empty-page';
import { FavoriteList } from '../../favorite-list/favorite-list';
import { OfferCardType } from '../../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../../store/data-process/selectors';

const FavoritesPage = () => {
  const offers = useAppSelector(getFavoriteOffers);

  return offers.length ? (
    <>
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoriteList
            offers={offers}
            cardsType={OfferCardType.Favorite}
          />
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </>
  ) : (
    <FavoritesEmptyPage />
  );
};

export { FavoritesPage };
