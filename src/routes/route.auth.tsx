import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { AuthLayout } from '../layouts';

export const AuthRoute = () => (
	<Routes>
		<Route path="/" element={<AuthLayout />}>
			<Route path="login" element={<LoginPage />} />
			<Route path="register" element={<RegisterPage />} />
			<Route path="*" element={<Navigate to="login" />} />
		</Route>
	</Routes>
);
