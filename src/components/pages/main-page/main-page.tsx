import { OfferList } from '../../offer-list/offer-list';

import { OfferCardType } from '../../../const';

import { Offer } from '../../../types/offer';

type MainPageProps = {
  offers: Offer[];
};

const MainPage = ({offers}: MainPageProps) => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <OfferList
          offers={offers}
          cardsType={OfferCardType.General}
        />
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  </main>
);

export { MainPage };
