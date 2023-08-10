import { useState } from 'react';
import { WAYS_SORTING_OFFERS } from '../../const';

type OffersSortingProps = {
  onSortTypeClick: (sortIndex: number) => void;
};

const SortingOffers = ({ onSortTypeClick }: OffersSortingProps) => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sortTypeName = WAYS_SORTING_OFFERS[activeIndex];

  const handleDropdownToggle = () => {
    setOpen(!isOpen);
  };

  const handleChoose = () => {
    setOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleDropdownToggle}
      >
        {sortTypeName}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={{ transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})` }}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
        onClick={handleChoose}
      >
        {
          WAYS_SORTING_OFFERS.map((way, index) => (
            <li
              key={way}
              className="places__option"
              tabIndex={0}
              onClick={() => {
                setActiveIndex(index);
                onSortTypeClick(index);
              }}
            >
              {way}
            </li>
          ))
        }

        {/* <li
          className="places__option places__option--active"
          tabIndex={0}
        >
          Popular
        </li> */}
      </ul>
    </form>
  );
};
export { SortingOffers };
