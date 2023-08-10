import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppSelector } from '../hooks';

const CityNavigation = () => {
  const selectedCity = useAppSelector((state) => state.city);

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
};

export { CityNavigation };
