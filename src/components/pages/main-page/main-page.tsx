import { useState } from 'react';
import { OfferCardType, MapType } from '../../../const';
import { CityNavigation } from '../../city-navigation/city-navigation';
import { OfferList } from '../../offer-list/offer-list';
import { MainEmptyPage } from '../main-empty-page/main-empty-page';
import { Map } from '../../map/map';
import { useAppSelector } from '../../hooks';

const MainPage = () => {
  const [hoveredOfferId, setHoveredOfferId] = useState('');
  const offers = useAppSelector((state) => state.offers);

  const handleOfferHover = (id: string) => {
    setHoveredOfferId(id);
  };

  return (
    <main
      className={`page__main page__main--index ${!offers.length ? 'page__main--index-empty' : ''}`}
    >
      <h1 className="visually-hidden">Cities</h1>
      <CityNavigation />
      {
        offers.length ?
          <div className="cities">
            <div className="cities__places-container container">
              <OfferList
                offers={offers}
                cardsType={OfferCardType.General}
                onHoverOffer={handleOfferHover}
              />
              <div className="cities__right-section">
                <Map mapType={MapType.Main} hoveredOfferId={hoveredOfferId}/>
              </div>
            </div>
          </div>
          :
          <MainEmptyPage />
      }
    </main>
  );
};

export { MainPage };
