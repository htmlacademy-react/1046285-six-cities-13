import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { DataProcess } from "../../types/state";

import {
  fetchOfferAction,
  fetchFavoriteOfferAction,
  changeStatusFavoriteOfferAction,
  fetchNearbyOffersAction,
  fetchOfferDetailsAction,
  fetchReviewsAction,
  postReviewAction
} from "../api-actions";

const initialState: DataProcess = {
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  offerDetails: null,
  reviews: [],
  isOffersDataLoading: true,
  isFavoriteOffersDataLoading: true,
  isOfferDetailsDataLoading: true,
}

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
    .addCase(fetchOfferAction.pending, (state) => {
      state.isOffersDataLoading = true;
      // state.offers = action.payload;
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
      state.offers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
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
