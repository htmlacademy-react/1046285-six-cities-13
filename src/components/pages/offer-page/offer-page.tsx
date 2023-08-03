import { useParams } from 'react-router-dom';
import { MapType } from '../../../const';
import { OfferCardType } from '../../../const';
import { ReviewsList } from '../../reviews-list/reviews-list';
import { Map } from '../../map/map';
import { OfferList } from '../../offer-list/offer-list';
import { Offer } from '../../../types/offer';
import { OfferDetails } from '../../../types/offer';
import { Review } from '../../../types/review';

type OfferPageProps = {
  offers: Offer[];
  offersDetails: OfferDetails[];
  reviews: Review[];
};

const OfferPage = ({ offers, offersDetails, reviews }: OfferPageProps) => {
  const { id } = useParams();
  const offerDetails = offersDetails.find((offer) => offer.id === id);
  const nearestOffers = offers.slice(0, 3);

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
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
              <button
                className={`offer__bookmark-button button ${offerDetails?.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
            <ReviewsList reviews={reviews} />
          </div>
        </div>
        {
          offerDetails && (
            <Map mapType={MapType.Offer} />
          )
        }
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList
              offers={nearestOffers}
              cardsType={OfferCardType.Nearest}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export { OfferPage };
