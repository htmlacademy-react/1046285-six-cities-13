export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OfferCardType {
  General = 'cities',
  Favorite = 'favorites'
}
