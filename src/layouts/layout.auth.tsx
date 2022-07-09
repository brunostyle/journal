import { Outlet } from 'react-router-dom';
import user from '../data/user.png';
import { Avatar, Row } from '@nextui-org/react';

export const AuthLayout = () => (
	<div className="background">
		<Row justify='center' css={{my: '3em'}}>
			<Avatar src={user} alt="user" size="xl" />
		</Row>
		<div className="container__auth">
			<Outlet />
		</div>
	</div>
);
