import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { saveToken, dropToken } from '../services/token';
import {
  loadOffers,
  loadFavoriteOffers,
  changeStatusFavoriteOffer,
  loadOfferDetails,
  loadReviews,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDetailsDataLoadingStatus,
  requireAuthorization,
  setError,
  redirectToRoute,
  loadNearbyOffers,
  postReview,
} from './action';
import { AppDispatch, State } from '../types/state';
import { Offer, OfferDetails, OfferFavoriteStatus } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { reviewData } from '../components/reviews-form/reviews-form';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoriteOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFavoriteOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    dispatch(setFavoriteOffersDataLoadingStatus(false));
    dispatch(loadFavoriteOffers(data));
    dispatch(redirectToRoute(AppRoute.Favorites));
  },
);

export const changeStatusFavoriteOfferAction = createAsyncThunk<void, OfferFavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeStatusFavoriteOfferAction',
  async ({id, status}, {dispatch, extra: api}) => {
    const { data } = await api.post<OfferDetails>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(changeStatusFavoriteOffer(data.id));
  },
);

export const fetchOfferDetailsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOfferDetailsDataLoadingStatus(true));
    const { data } = await api.get<OfferDetails>(`${APIRoute.Offers}/${id}`);
    dispatch(setOfferDetailsDataLoadingStatus(false));
    dispatch(loadOfferDetails(data));
    dispatch(redirectToRoute(`${AppRoute.Offer}/${id}`));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    dispatch(loadNearbyOffers(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const postReviewAction = createAsyncThunk<void, reviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${id}`, {
      rating,
      comment
    });
    dispatch(postReview(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, getState, extra: api}) => {
    const state = getState();
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root + state.city.name));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, getState, extra: api}) => {
    const state = getState();
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Root + state.city.name));
  },
);
