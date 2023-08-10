import { Offer } from '../types/offer';

const sortLowToHighPrice = (aOffer: Offer, bOffer: Offer) =>
  aOffer.price - bOffer.price;

const sortHighToLowPrice = (aOffer: Offer, bOffer: Offer) =>
  bOffer.price - aOffer.price;

const sortTopToLowRating = (aOffer: Offer, bOffer: Offer) =>
  bOffer.rating - aOffer.rating;

type TSort = {
  [k: string]: (offers: Offer[]) => Offer[];
};

const Sort: TSort = {
  '0': (offers: Offer[]) => [...offers],
  '1': (offers: Offer[]) => [...offers].sort(sortLowToHighPrice),
  '2': (offers: Offer[]) => [...offers].sort(sortHighToLowPrice),
  '3': (offers: Offer[]) => [...offers].sort(sortTopToLowRating),
};

export { Sort };
