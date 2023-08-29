import { SyntheticEvent, memo } from 'react';
import { CITIES } from '../../const';
import { useAppSelector } from '../hooks';
import { getCity } from '../../store/app-process/selectors';
import { changeCity } from '../../store/app-process/app-process';
import { useAppDispatch } from '../hooks';

const CityNavigation = memo(() => {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getCity);

  const handleClick = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();

    dispatch(changeCity(evt.currentTarget.dataset.name));
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
                  onClick={handleClick}
                  data-name={city.name}
                  href='#'
                >
                  <span>{city.name}</span>
                </a>
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
