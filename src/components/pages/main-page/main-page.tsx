import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferCardType, MapType } from '../../../const';
import { CityNavigation } from '../../city-navigation/city-navigation';
import { OfferList } from '../../offer-list/offer-list';
import { MainEmptyPage } from '../main-empty-page/main-empty-page';
import { Map } from '../../map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers } from '../../../store/data-process/selectors';
import { changeCity } from '../../../store/app-process/app-process';
import { fetchOfferAction } from '../../../store/api-actions';
import { getCity } from '../../../store/app-process/selectors';

const MainPage = () => {
  const city = useAppSelector(getCity).name;
  const [hoveredOfferId, setHoveredOfferId] = useState('');
  const offers = useAppSelector(getOffers);
  const filterredOffers = offers.filter((offer) => offer.city.name === city);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let wasMounted = true;

    if (wasMounted) {
      dispatch(changeCity(city));
      dispatch(fetchOfferAction);
    }

    return () => {
      wasMounted = false;
    };
  }, [city, dispatch]);


  const handleOfferHover = (id: string) => setHoveredOfferId(id);

  return (
    <main
      className={`page__main page__main--index ${!filterredOffers.length ? 'page__main--index-empty' : ''}`}
    >
      <Helmet>
        <title>6 cities: {city}</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <CityNavigation />
      {
        filterredOffers.length > 0 ?
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
                  <Map offers={filterredOffers} mapType={MapType.Main} hoveredOfferId={hoveredOfferId}/>
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
