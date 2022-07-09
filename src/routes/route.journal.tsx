import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalLayout } from '../layouts';
import { JournalPage } from '../pages';

export const JournalRoute = () => (
	<Routes>
		<Route path="/" element={<JournalLayout />}>
			<Route index element={<JournalPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Route>
	</Routes>
);
