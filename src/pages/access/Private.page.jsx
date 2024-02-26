import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/auth.selectors';
import { AccessPropTypes } from './Access.props';
import { routes } from 'constants/routes';

export default function PrivatePage({
  component: Component,
  redirect = routes.WELCOME_PAGE,
}) {
  const location = useLocation();
  const token = useSelector(selectAccessToken);

  return !token ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    Component
  );
}

PrivatePage.propTypes = AccessPropTypes;
