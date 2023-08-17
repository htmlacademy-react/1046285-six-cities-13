import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppSelector } from '../hooks';
import { getCity } from '../../store/app-process/selectors';

const CityNavigation = memo(() => {
  const selectedCity = useAppSelector(getCity);

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
                <Link
                  className={`locations__item-link tabs__item ${city.name === selectedCity.name ? 'tabs__item--active' : ''}`}
                  to={`/${city.name}`}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
});

CityNavigation.displayName = 'CityNavigation';

export { CityNavigation };
