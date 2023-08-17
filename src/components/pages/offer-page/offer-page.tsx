import { OfferPageDetails } from './offer-page-details';
import { useAppSelector } from '../../hooks';
import { OfferPageNearest } from './offer-page-nearest';
import { getOfferDetails, getReviews, getNearbyOffers } from '../../../store/data-process/selectors';

const OfferPage = () => {
  const offerDetails = useAppSelector(getOfferDetails);
  const reviews = useAppSelector(getReviews);
  const nearestOffers = useAppSelector(getNearbyOffers).slice(0, 3);

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
      </section>
      {
        nearestOffers && (
          <OfferPageNearest />
        )
      }
    </main>
  );
};

export { OfferPage };
