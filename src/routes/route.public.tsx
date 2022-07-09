import { Navigate } from 'react-router-dom';
import type { RouteType } from '../interface';

export const PublicRoutes = ({ children, logged }: RouteType) => {
	return logged ? <Navigate to="/" /> : children;
};
