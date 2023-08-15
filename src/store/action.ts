import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferDetails } from '../types/offer';
import { Review } from '../types/review';

export const changeCity = createAction<string>('city/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadFavoriteOffers = createAction<Offer[]>('data/loadFavoriteOffers');
export const changeStatusFavoriteOffer = createAction<string>('data/changeStatusFavoriteOffer');
export const loadOfferDetails = createAction<OfferDetails>('data/loadOfferDetails');
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
export const loadReviews = createAction<Review[]>('data/loadReviews');
export const postReview = createAction<Review>('data/postReview');
export const setError = createAction<string | null>('data/setError');
export const sortOffers = createAction<NumberConstructor>('offers/sort');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setFavoriteOffersDataLoadingStatus = createAction<boolean>('data/setFavoriteOffersDataLoadingStatus');
export const setOfferDetailsDataLoadingStatus = createAction<boolean>('data/setOfferDetailsDataLoadingStatus');
export const requireAuthorization = createAction<string>('user/requireAuthorization');
export const requireUserEmail = createAction<string>('user/requireUserInformation');
export const redirectToRoute = createAction<string>('app/redirectToRoute');

