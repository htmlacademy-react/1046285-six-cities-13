import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { saveToken, dropToken } from '../services/token';
import {redirectToRoute} from './action';
import { AppDispatch, State } from '../types/state';
import { Offer, OfferDetails, OfferFavoriteStatus } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData, UserInfo } from '../types/user-data';
import { reviewData } from '../components/reviews-form/reviews-form';
import { setError } from './app-process/app-process';
import { NameSpace } from '../const';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
}>(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR,
  );
});

export const fetchOfferAction = createAsyncThunk<Offer[], undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFavoriteOfferAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchOfferDetailsAction = createAsyncThunk<OfferDetails, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDetails',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferDetails>(`${APIRoute.Offers}/${id}`);
    dispatch(redirectToRoute(`${AppRoute.Offer}/${id}`));
    return data;
  },
);

export const changeStatusFavoriteOfferAction = createAsyncThunk<string, OfferFavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeStatusFavoriteOfferAction',
  async ({ id, status }, { extra: api }) => {
    await api.post<OfferDetails>(`${APIRoute.Favorite}/${id}/${status}`);
    return id
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], string, {
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review, reviewData, {
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${id}`, {rating, comment});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, getState, extra: api }) => {
    const state = getState();
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root + state[NameSpace.App].city.name));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, getState, extra: api }) => {
    const state = getState();
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Root + state[NameSpace.App].city.name));
  },
);
