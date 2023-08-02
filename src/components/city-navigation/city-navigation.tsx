import { SyntheticEvent } from 'react';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCity, getOffers } from '../../store/action';

const CityNavigation = () => {
  const selectedCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    const city = event.currentTarget.dataset.city;

    if (city) {
      dispatch(changeCity(city));
      dispatch(getOffers(city));
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city) => (
              <li
                className="locations__item"
                key={city.name}
              >
                <a
                  className={`locations__item-link tabs__item ${city.name === selectedCity.name ? 'tabs__item--active' : ''}`}
                  data-city={city.name}
                  href="#"
                  onClick={handleClick}
                >
                  <span
                    data-city={city.name}
                  >
                    {city.name}
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

export { CityNavigation };
