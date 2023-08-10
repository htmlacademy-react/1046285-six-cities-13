import { useState } from 'react';
import { OfferCardType } from '../../const';
import { SortingOffers } from '../sorting-offers/sorting-offers';
import { OfferCard } from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { Sort } from '../../utils/sort';

type OfferListProps = {
  offers: Offer[];
  cardsType: string;
  onHoverOffer?: (offerId: string) => void;
};

const OfferList = ({ offers, cardsType, onHoverOffer }: OfferListProps) => {
  const [currentSortIndex, setCurrentSortIndex] = useState<number>(0);
  const sortedOffers = Sort[currentSortIndex](offers);

  const handleSortTypeClick = (sortIndex: number) => {
    setCurrentSortIndex(sortIndex);
  };

  return (
    <section
      className={`${cardsType === OfferCardType.Nearest ? 'near-places' : 'cities__places'} places`}
    >
      {
        cardsType !== OfferCardType.Nearest && (
          <>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <SortingOffers onSortTypeClick={handleSortTypeClick} />
          </>
        )
      }
      <div
        className={`${cardsType === OfferCardType.Nearest ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}
      >
        {
          sortedOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onHover={onHoverOffer}
              cardType={cardsType}
            />
          ))
        }
      </div>
    </section>
  );
};

export { OfferList };
