import { useState } from 'react';
import { MapType } from '../../../const';
import { OfferCardType } from '../../../const';
import { ReviewsList } from '../../reviews-list/reviews-list';
import { Map } from '../../map/map';
import { useAppSelector } from '../../hooks';
import { OfferList } from '../../offer-list/offer-list';

const OfferPage = () => {
  const offerDetails = useAppSelector((state) => state.offerDetails);
  const reviews = useAppSelector((state) => state.reviews);
  const nearestOffers = useAppSelector((state) => state.nearbyOffers).slice(0, 3);
  const [hoveredOfferId, setHoveredOfferId] = useState('');

  const handleOfferHover = (id: string) => {
    setHoveredOfferId(id);
  };

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
            {reviews.length && <ReviewsList reviews={reviews} />}
          </div>
        </div>
        {
          offerDetails && (
            <Map offers={nearestOffers} mapType={MapType.Offer} hoveredOfferId={hoveredOfferId} />
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
