import { useState } from 'react';
import { MapType } from '../../../const';
import { getNearbyOffers } from '../../../store/data-process/selectors';
import { useAppSelector } from '../../hooks';
import { Map } from '../../map/map';
import { OfferList } from '../../offer-list/offer-list';
import { OfferCardType } from '../../../const';

const OfferPageNearest = () => {
  const nearestOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const [hoveredOfferId, setHoveredOfferId] = useState('');

  const handleOfferHover = (id: string) => setHoveredOfferId(id);

  return (
    <>
      {
        nearestOffers && (
          <Map
            offers={nearestOffers}
            mapType={MapType.Offer}
            hoveredOfferId={hoveredOfferId}
          />
        )
      }
      <div className="container">
        <OfferList
          onHoverOffer={handleOfferHover}
          offers={nearestOffers}
          cardsType={OfferCardType.Nearest}
        />
      </div>Í
    </>
  );
};

export { OfferPageNearest };
