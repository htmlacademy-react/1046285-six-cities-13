import { Helmet } from 'react-helmet-async';
import { OfferPageDetails } from './offer-page-details';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OfferPageNearest } from './offer-page-nearest';
import { getOfferDetails, getReviews, getNearbyOffers, isOfferDetailsLoading } from '../../../store/data-process/selectors';
import { useEffect } from 'react';
import { fetchNearbyOffersAction, fetchOfferDetailsAction, fetchReviewsAction } from '../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { LoadingPage } from '../loading-page/loading-page';

const OfferPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offerDetails = useAppSelector(getOfferDetails);
  const reviews = useAppSelector(getReviews);
  const isOfferDetailsDataLoading = useAppSelector(isOfferDetailsLoading);
  const nearestOffers = useAppSelector(getNearbyOffers).slice(0, 3);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(fetchOfferDetailsAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  if (isOfferDetailsDataLoading) {
    return <LoadingPage />
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: {offerDetails?.title}</title>
      </Helmet>
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
          <OfferPageNearest
            offerId={id ? id : ''}
          />
        )
      }
    </main>
  );
};

export { OfferPage };
