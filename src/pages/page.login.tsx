import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../zustand';
import { Input } from '../components';
import { Form, Formik } from 'formik';
import { Button, Container, Link, Spacer, Text } from '@nextui-org/react';
import { Link as NavLink } from 'react-router-dom';
import * as Yup from 'yup';

interface ILogin {
	email: string;
	password: string;
}
const initial: ILogin = { email: '', password: '' };
const loginSchema = Yup.object({
	email: Yup.string().required('Email is required').email('Email is not valid'),
	password: Yup.string().required('Password is required'),
});

export const LoginPage = () => {
	const { login, loginWithGoogle } = useAuth();

	const handleSubmit = ({ email, password }: ILogin) => {
		login(email, password);
	};

	return (
		<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
			<Form>
				<Container display="flex" direction="column">
					<Input name="email" label="Email" />
					<Spacer y={1.5} />
					<Input name="password" label="Password" />
					<Spacer y={1.5} />
					<Button type="submit">Login</Button>
					<Spacer />
					<Button color="secondary" flat icon={<FcGoogle />} onClick={loginWithGoogle}>
						Sign in with Google
					</Button>
					<Spacer />
					<NavLink to="/auth/register">
						<Text>
							Do not you have an account yet? <Link as="span">Sign Up</Link>
						</Text>
					</NavLink>
				</Container>
			</Form>
		</Formik>
	);
};
