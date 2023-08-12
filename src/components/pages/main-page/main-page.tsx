import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OfferCardType, MapType } from '../../../const';
import { CityNavigation } from '../../city-navigation/city-navigation';
import { OfferList } from '../../offer-list/offer-list';
import { MainEmptyPage } from '../main-empty-page/main-empty-page';
import { Map } from '../../map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, loadOffers } from '../../../store/action';

const MainPage = () => {
  const { city } = useParams();
  const [hoveredOfferId, setHoveredOfferId] = useState('');
  const offers = useAppSelector((state) => state.offers);
  const filterredOffers = offers.filter((offer) => offer.city.name === city);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCity(city as string));
    dispatch(loadOffers);
  }, [city, dispatch]);


  const handleOfferHover = (id: string) => {
    setHoveredOfferId(id);
  };

  return (
    <main
      className={`page__main page__main--index ${!filterredOffers.length ? 'page__main--index-empty' : ''}`}
    >
      <h1 className="visually-hidden">Cities</h1>
      <CityNavigation />
      {
        filterredOffers.length ?
          <>
            <h2 className="visually-hidden">Places</h2>
            <div className="cities">
              <div className="cities__places-container container">
                <OfferList
                  offers={filterredOffers}
                  cardsType={OfferCardType.General}
                  onHoverOffer={handleOfferHover}
                />
                <div className="cities__right-section">
                  <Map mapType={MapType.Main} hoveredOfferId={hoveredOfferId}/>
                </div>
              </div>
            </div>
          </>
          :
          <MainEmptyPage />
      }
    </main>
  );
};

export { MainPage };
