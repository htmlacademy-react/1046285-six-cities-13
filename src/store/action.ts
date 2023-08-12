import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const loadOffers = createAction('data/loadOffers', (value: Offer[]) => ({
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

export const requireAuthorization = createAction('user/requireAuthorization', (value: string) => ({
  payload: value,
}));

