import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  loadFavoriteOffers,
  changeStatusFavoriteOffer,
  loadNearbyOffers,
  loadOfferDetails,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDetailsDataLoadingStatus,
  requireAuthorization,
  setError,
  loadReviews,
  postReview,
  requireUserEmail,
} from './action';
import { CITIES, DefaultCity, AuthorizationStatus } from '../const';
import { City, Offer, OfferDetails } from '../types/offer';
import { Review } from '../types/review';

type InitialState = {
  city: City;
  offers: Offer[];
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  offerDetails: OfferDetails | null;
  reviews: Review[];
  isOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
  isOfferDetailsDataLoading: boolean;
  authorizationStatus: string;
  userEmail: string;
  error: string | null;
};

const initialState: InitialState = {
  city: CITIES.find((city) => city.name === DefaultCity.name) as City,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  offerDetails: null,
  reviews: [],
  isOffersDataLoading: true,
  isFavoriteOffersDataLoading: true,
  isOfferDetailsDataLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = CITIES.find((city) => city.name === action.payload) as City;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(changeStatusFavoriteOffer, (state, action) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isFavoriteOffersDataLoading = action.payload;
    })
    .addCase(setOfferDetailsDataLoadingStatus, (state, action) => {
      state.isOfferDetailsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
