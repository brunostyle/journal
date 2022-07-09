import { Outlet } from 'react-router-dom';
import { Background, ContainerAuth } from '../styles';
import user from '../data/user.png';
import { Avatar, Row } from '@nextui-org/react';

export const AuthLayout = () => (
	<Background>
		<Row justify='center' css={{my: '3em'}}>
			<Avatar src={user} alt="user" size="xl" />
		</Row>
		<ContainerAuth>
			<Outlet />
		</ContainerAuth>
	</Background>
);
