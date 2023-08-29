import { MapType } from '../../../const';
import { getNearbyOffers, getOffers } from '../../../store/data-process/selectors';
import { useAppSelector } from '../../hooks';
import { Map } from '../../map/map';
import { OfferList } from '../../offer-list/offer-list';
import { OfferCardType } from '../../../const';

type OfferPageNearestProps = {
  offerId: string;
};

const OfferPageNearest = ({ offerId }: OfferPageNearestProps) => {
  const currentOffer = useAppSelector(getOffers).find((offer) => offer.id === offerId) || [];
  const nearestOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const allOffers = nearestOffers.concat(currentOffer);

  return (
    <>
      {
        nearestOffers && (
          <Map
            hoveredOfferId={offerId}
            offers={allOffers}
            mapType={MapType.Offer}
          />
        )
      }
      <div className="container">
        <OfferList
          offers={nearestOffers}
          cardsType={OfferCardType.Nearest}
        />
      </div>
    </>
  );
};

export { OfferPageNearest };
