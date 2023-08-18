import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { City, Offer, OfferDetails } from './offer';
import { Review } from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userProfile: UserData | null;
};

export type AppProcess = {
  city: City;
  error: string | null;
};

export type DataProcess = {
  offers: Offer[];
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  offerDetails: OfferDetails | null;
  reviews: Review[];
  isOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
  isOfferDetailsDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
