import { OfferCard } from '../offer-card/offer-card';

import { Offer } from '../../types/offer';

type FavoriteListProps = {
  offers: Offer[];
  cardsType: string;
};

const FavoriteList = ({ offers, cardsType }: FavoriteListProps) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = new Set(favoriteOffers.map((offer) => offer.city.name));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          [...cities].map((city) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  favoriteOffers.map((offer) => (
                    offer.city.name === city && (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        cardType={cardsType}
                      />
                    )
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export { FavoriteList };
