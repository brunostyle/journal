import { useAuth } from '../zustand';
import { Form, Formik } from 'formik';
import { Input } from '../components';
import { Button, Container, Link, Spacer, Text } from '@nextui-org/react';
import { Link as NavLink } from 'react-router-dom';
import * as Yup from 'yup';

interface IRegister {
	name: string;
	email: string;
	password: string;
}
const initial: IRegister = { name: '', email: '', password: '' };
const registerSchema = Yup.object({
	name: Yup.string().required('Name in required').min(3, 'Name is too short').max(30, 'Name is too long'),
	email: Yup.string().required('Email is required').email('Email is not valid'),
	password: Yup.string().required('Password is required'),
});

export const RegisterPage = () => {
	const { register } = useAuth();

	const handleSubmit = ({name, email, password}: IRegister) => {
		register(name, email, password);
	};

	return (
		<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
			<Form>
				<Container display="flex" direction="column">
					<Input name="name" label="Name" />
					<Spacer y={1.5} />
					<Input name="email" label="Email" />
					<Spacer y={1.5} />
					<Input name="password" label="Password" />
					<Spacer y={1.5} />
					<Button type="submit">Register</Button>
					<Spacer />
					<NavLink to="/auth/login">
						<Text>Do you already have an account? <Link as="span">Sign In</Link></Text>
					</NavLink>
				</Container>
			</Form>
		</Formik>
	);
};
