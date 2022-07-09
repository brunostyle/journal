import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthRoute, JournalRoute, PrivateRoutes, PublicRoutes } from './routes';
import { auth } from './firebase';
import { useAuth, useNote } from './zustand';
import { Row, Loading } from '@nextui-org/react';

export const App = () => {
	const { loginUser } = useAuth();
	const { noteLoad } = useNote();
	const [loading, setLoading] = useState(true);
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setLogged(true);
				loginUser(user.uid, user.displayName!);
				noteLoad(user.uid);
			} else {
				setLogged(false);
			}
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<Row justify="center" align="center" css={{height: '100vh'}}>
				<Loading />
			</Row>
		)
	}

	return (
		<Routes>
			<Route path="/auth/*" element={<PublicRoutes logged={!!logged}><AuthRoute /></PublicRoutes>} />
			<Route path="/*" element={<PrivateRoutes logged={!!logged}><JournalRoute /></PrivateRoutes>} />
		</Routes>
	);
};
