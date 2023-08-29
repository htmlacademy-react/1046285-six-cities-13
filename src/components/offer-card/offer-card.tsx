import { SyntheticEvent } from 'react';
import { AppRoute, OfferCardType } from '../../const';
import { Offer } from '../../types/offer';
import { useAppDispatch } from '../hooks';
import { changeStatusFavoriteOfferAction } from '../../store/api-actions';
import { FavoriteToggle } from '../favorite-toggle/favorite-toggle';
import { useNavigate } from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  cardType: string;
  onHover?: (id: string) => void;
};

const OfferCard = ({ offer, cardType, onHover }: OfferCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCardClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    navigate(`${AppRoute.Offer}/${offer.id}`);
  };

  const handleFavoriteToggle = (status: number) => {
    dispatch(changeStatusFavoriteOfferAction({ id: offer.id, status: status }));
  };

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onHover && onHover(offer.id)}
      onMouseLeave={() => onHover && onHover('')}
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
        <a
          onClick={handleCardClick}
          href="#"
        >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === OfferCardType.Favorite ? 150 : 260}
            height={cardType === OfferCardType.Favorite ? 110 : 200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              €{offer.price}
            </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {
            <FavoriteToggle
              onChangeFavoriteStatus={handleFavoriteToggle}
              isFavorite={offer.isFavorite}
              parentType={cardType}
            />
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / 5 * Math.round(offer.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            onClick={handleCardClick}
            href=""
          >
            {offer.title}
          </a>
        </h2>
        <p
          className="place-card__type"
        >
          {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
};

export { OfferCard };
