import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-data';

export const getAuthStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): UserInfo | null => state[NameSpace.User].userProfile;
