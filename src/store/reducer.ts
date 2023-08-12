import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setOffersDataLoadingStatus } from './action';
import { CITIES, DefaultCity } from '../const';

import { City, Offer } from '../types/offer';

const initialState = {
  city: CITIES.find((city) => city.name === DefaultCity.name) as City,
  offers: [] as Offer[],
  isOffersDataLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = CITIES.find((city) => city.name === action.payload) as City;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
