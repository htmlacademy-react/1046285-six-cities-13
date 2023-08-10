import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('city/changeCity', (value: string) => ({
  payload: value,
}));

export const getOffers = createAction('offers/getOffers', (value: string) => ({
  payload: value,
}));

export const sortOffers = createAction('offers/sort', (value: NumberConstructor) => ({
  payload: value,
}));
