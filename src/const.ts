import { City } from './types/offer';

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferCardType {
  General = 'cities',
  Offer = 'offer',
  Favorite = 'favorites',
  Nearest = 'near-places',
}

export enum MapType {
  Main = 'cities',
  Offer = 'offer',
}

export enum ReviewValidate {
  MinCommentLength = 50,
  MinRating = 0,
}

export enum ReviewsLimit {
  maxNumber = 10,
}

type ReviewRating = {
  value: number;
  title: string;
}

export const REVIEW_RATING_LEVELS: ReviewRating[] = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

export enum DefaultCity {
  name = 'Paris',
}

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8567801,
      longitude: 2.3315211,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9461149,
      longitude: 6.9415238,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8552034,
      longitude: 4.2930173,
      zoom: 10,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3547607,
      longitude: 4.7391566,
      zoom: 10,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5586627,
      longitude: 9.7630179,
      zoom: 10,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.238554,
      longitude: 6.6495462,
      zoom: 10,
    }
  },
];

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export type SortType = string;

export const WAYS_SORTING_OFFERS: SortType[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const DEFAULT_MARKER_SRC = './markup/img/pin.svg';
export const CURRENT_MARKER_SRC = './markup/img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offers = '/offers',
  Nearby = '/nearby',
  Favorite = '/favorite',
  Comments = '/comments',
  User = '/user',
  Login = '/login',
  Logout = '/logout',
}
