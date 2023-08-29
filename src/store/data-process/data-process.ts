import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/state';

import {
  fetchOfferAction,
  fetchFavoriteOfferAction,
  changeStatusFavoriteOfferAction,
  fetchNearbyOffersAction,
  fetchOfferDetailsAction,
  fetchReviewsAction,
  postReviewAction
} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  offerDetails: null,
  reviews: [],
  isOffersDataLoading: true,
  isFavoriteOffersDataLoading: true,
  isOfferDetailsDataLoading: true,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavoriteOfferAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOfferAction.fulfilled, (state, action) => {
        state.isFavoriteOffersDataLoading = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(changeStatusFavoriteOfferAction.fulfilled, (state, action) => {
        const targetOffer = state.offers.find((offer) => offer.id === action.payload);
        const currentOffer = state.favoriteOffers.find((fOffer) => fOffer.id === action.payload);

        if (targetOffer && !currentOffer) {
          state.favoriteOffers.push(targetOffer);
        } else if (targetOffer && currentOffer) {
          state.favoriteOffers.splice(state.favoriteOffers.indexOf(currentOffer), 1);
        }
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchOfferDetailsAction.pending, (state) => {
        state.isOfferDetailsDataLoading = true;
      })
      .addCase(fetchOfferDetailsAction.fulfilled, (state, action) => {
        state.isOfferDetailsDataLoading = false;
        state.offerDetails = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});
