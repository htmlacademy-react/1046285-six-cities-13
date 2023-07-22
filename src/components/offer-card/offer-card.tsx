import { Link } from 'react-router-dom';

import { OfferCardType, AppRoute } from '../../const';

import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  cardType: string;
  onHover?: (id: string) => void;
};

const OfferCard = ({offer, cardType, onHover}: OfferCardProps) => (
  <article
    className={`${cardType}__card place-card`}
    onMouseEnter={() => onHover && onHover(offer.id)}
  >
    {
      offer.isPremium &&
      (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )
    }
    <div
      className={`${cardType}__image-wrapper place-card__image-wrapper`}
    >
      <Link to={AppRoute.Offer}>
        <img
          className="place-card__image"
          src={offer.previewImage}
          width={cardType === OfferCardType.General ? 260 : 150}
          height={cardType === OfferCardType.General ? 200 : 110}
          alt="Place image"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">
            €{offer.price}
          </b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${100 / 5 * Math.round(offer.rating)}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={AppRoute.Offer}>
          {offer.title}
        </Link>
      </h2>
      <p className="place-card__type">
        {offer.type}
      </p>
    </div>
  </article>
);

export { OfferCard };
