import { store } from '../../../store';
import { changeStatusFavoriteOfferAction } from '../../../store/api-actions';
import { OfferDetails } from '../../../types/offer';
import { Review } from '../../../types/review';
import { ReviewsList } from '../../reviews-list/reviews-list';
import { FavoriteToggle } from '../../favorite-toggle/favorite-toggle';

type OfferPageDetailsProps = {
  offerDetails: OfferDetails;
  reviews: Review[];
};

const OfferPageDetails = ({offerDetails, reviews}: OfferPageDetailsProps) => {
  const handleFavoriteToggle = (status: number) => {
    store.dispatch(changeStatusFavoriteOfferAction({ id: offerDetails.id, status: status }));
  };

  return (
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {
            offerDetails?.images.map((img) => (
              <div className="offer__image-wrapper" key={img}>
                <img
                  className="offer__image"
                  src={img}
                  alt={offerDetails.title}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {
            offerDetails?.isPremium &&
            (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )
          }
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offerDetails?.title}
            </h1>
            <FavoriteToggle
              onChangeFavoriteStatus={handleFavoriteToggle}
              isFavorite={offerDetails.isFavorite}
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${100 / 5 * Math.round(offerDetails?.rating || 0)}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offerDetails?.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{offerDetails?.type}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {offerDetails?.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offerDetails?.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">€{offerDetails?.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {
                offerDetails?.goods.map((good) => (
                  <li className="offer__inside-item" key={good}>{good}</li>
                ))
              }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div
                className={`offer__avatar-wrapper ${offerDetails?.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
              >
                <img
                  className="offer__avatar user__avatar"
                  src={offerDetails?.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{offerDetails?.host.name}</span>
              {offerDetails?.host.isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {offerDetails?.description}
              </p>
            </div>
          </div>
          {reviews.length && <ReviewsList reviews={reviews} />}
        </div>
      </div>
    </>
  );
};

export { OfferPageDetails };
