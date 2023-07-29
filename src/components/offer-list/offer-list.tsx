import { useState } from 'react';
import { OfferCardType } from '../../const';
import { OfferCard } from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  cardsType: string;
};

const OfferList = ({offers, cardsType}: OfferListProps) => {
  const [activeOfferId, setActiveOfferId] = useState('');
  const offerCount = offers.length;

  // eslint-disable-next-line no-console
  console.log(activeOfferId);

  return (
    <section
        className={`${cardsType === OfferCardType.Nearest ? 'near-places': 'cities__places'} places`}
      >
      {
        cardsType !== OfferCardType.Nearest && (
          <>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offerCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
          </>
        )
      }
      <div
        className={`${cardsType === OfferCardType.Nearest ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}
      >
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onHover={setActiveOfferId}
              cardType={cardsType}
            />
          ))
        }
      </div>
    </section>
  );
};

export { OfferList };
