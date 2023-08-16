import { useState } from 'react';
import { MapType } from '../../../const';
import { OfferCardType } from '../../../const';
import { OfferPageDetails } from './offer-page-details';
import { Map } from '../../map/map';
import { useAppSelector } from '../../hooks';
import { OfferList } from '../../offer-list/offer-list';
import { getOfferDetails, getReviews, getNearbyOffers } from '../../../store/data-process/selectors';

const OfferPage = () => {
  const offerDetails = useAppSelector(getOfferDetails);
  const reviews = useAppSelector(getReviews);
  const nearestOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const [hoveredOfferId, setHoveredOfferId] = useState('');

  const handleOfferHover = (id: string) => {
    setHoveredOfferId(id);
  };

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        {
          offerDetails && (
            <OfferPageDetails
              offerDetails={offerDetails}
              reviews={reviews}
            />
          )
        }
        {
          nearestOffers && (
            <Map
              offers={nearestOffers}
              mapType={MapType.Offer}
              hoveredOfferId={hoveredOfferId}
            />
          )
        }
      </section>
      <div className="container">
        <OfferList
          onHoverOffer={handleOfferHover}
          offers={nearestOffers}
          cardsType={OfferCardType.Nearest}
        />
      </div>
    </main>
  );
};

export { OfferPage };
