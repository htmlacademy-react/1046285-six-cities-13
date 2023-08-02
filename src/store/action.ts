import { createAction } from "@reduxjs/toolkit";

export const changeCity = createAction('city/changeCity', (value) => ({
  payload: value,
}));

export const getOffers = createAction('offers/getOffers', (value) => ({
  payload: value,
}));
