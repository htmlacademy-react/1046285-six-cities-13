export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OfferCardType {
  General = 'cities',
  Favorite = 'favorites',
}

export enum ReviewValidate {
  MinCommentLength = 50,
  MinRating = 0,
}

type ReviewRating = {
  value: number;
  title: string;
}

export const ReviewRatings: ReviewRating[] = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'}
];
