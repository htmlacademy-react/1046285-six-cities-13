import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: string;
}>;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authorizationStatus, children }: PrivateRouteProps) => (
  authorizationStatus === AuthorizationStatus.Auth ?
    <div>{children}</div>
    :
    <Navigate to={AppRoute.Login} />
);

export { PrivateRoute };
