import { useState } from 'react';
import { OfferCardType } from '../../const';
import { SortingOffers } from '../sorting-offers/sorting-offers';
import { OfferCard } from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { Sort } from '../../utils/sort';
import { useAppSelector } from '../hooks';
import { getCity } from '../../store/app-process/selectors';

type OfferListProps = {
  offers: Offer[];
  cardsType: string;
  onHoverOffer?: (offerId: string) => void;
};

const OfferList = ({ offers, cardsType, onHoverOffer }: OfferListProps) => {
  const city = useAppSelector(getCity).name;
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
        cardsType !== OfferCardType.Nearest ? (
          <>
            <b className="places__found">{offers.length} place{offers.length > 1 ? 's' : ''} to stay in {city}</b>
            <SortingOffers onSortTypeClick={handleSortTypeClick} />
          </>
        ) :
          (
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
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
