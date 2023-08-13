import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferDetails } from '../types/offer';
import { Review } from '../types/review';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const loadOffers = createAction('data/loadOffers', (value: Offer[]) => ({
  payload: value,
}));

export const loadOfferDetails = createAction('data/loadOfferDetails', (value: OfferDetails) => ({
  payload: value,
}));

export const loadNearbyOffers = createAction('data/loadNearbyOffers', (value: Offer[]) => ({
  payload: value,
}));

export const loadReviews = createAction('data/loadReviews', (value: Review[]) => ({
  payload: value,
}));

export const setError = createAction('data/setError', (value: string | null) => ({
  payload: value,
}));

export const sortOffers = createAction('offers/sort', (value: NumberConstructor) => ({
  payload: value,
}));

export const setOffersDataLoadingStatus = createAction('data/setOffersDataLoadingStatus', (value: boolean) => ({
  payload: value,
}));

export const setOfferDetailsDataLoadingStatus = createAction('data/setOfferDetailsDataLoadingStatus', (value: boolean) => ({
  payload: value,
}));

export const requireAuthorization = createAction('user/requireAuthorization', (value: string) => ({
  payload: value,
}));

export const redirectToRoute = createAction('app/redirectToRoute', (value: string) => ({
  payload: value,
}));

