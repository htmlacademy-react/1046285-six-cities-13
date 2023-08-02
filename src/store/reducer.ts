import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action';
import { CITIES, DefaultCity } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  city: CITIES.find((city) => city.name === DefaultCity.name),
  offers: offers.filter((offer) => offer.city.name === DefaultCity.name),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers.filter((offer) => offer.city.name === action.payload);
    });
});
