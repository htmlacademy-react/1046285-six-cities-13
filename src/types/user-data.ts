export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type UserInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type Review = {
  id: string;
  review: string;
  raiting: number;
};
