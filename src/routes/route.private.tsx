import { Navigate } from 'react-router-dom';
import type { RouteType } from '../interface';

export const PrivateRoutes = ({ children, logged }: RouteType) => {
	return logged ? children : <Navigate to="/auth/login" />;
};
