import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: string;
}>;

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps) => (
  authorizationStatus === AuthorizationStatus.Auth ?
    children
    :
    <Navigate to={AppRoute.Login} />
);

export { PrivateRoute };
