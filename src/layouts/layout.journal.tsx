import { Outlet } from 'react-router-dom';
import { MenuJournal } from '../components';

export const JournalLayout = () => (
	<div className="container__journal">
		<MenuJournal />
		<div className="background">
			<Outlet />
		</div>
	</div>
);
