import { Outlet } from 'react-router-dom';
import { MenuJournal } from '../components';
import { ContainerJournal } from '../styles';
import { Background } from '../styles';

export const JournalLayout = () => (
	<ContainerJournal>
		<MenuJournal />
		<Background>
			<Outlet />
		</Background>
	</ContainerJournal>
);
