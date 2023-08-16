import { NameSpace } from "../../const";
import { State } from "../../types/state";
import { Offer, OfferDetails } from "../../types/offer";
import { Review } from "../../types/review";

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOfferDetails = (state: State): OfferDetails | null => state[NameSpace.Data].offerDetails;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const isOffersLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const isOfferDetailsLoading = (state: State): boolean => state[NameSpace.Data].isOfferDetailsDataLoading;
export const isFavoriteOfferLoading = (state: State): boolean => state[NameSpace.Data].isFavoriteOffersDataLoading;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
