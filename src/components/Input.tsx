import { ErrorMessage, Field } from 'formik';
import { Input as InputField } from '@nextui-org/react';

interface IInput {
	name: string;
	label: string;
	icon?: JSX.Element;
	border?: boolean;
}

export const Input = ({ name, label, icon, border = true }: IInput) => (
	<Field
		name={name}
		placeholder={border ? label : ''}
		label={!border && label}
		bordered={border}
		clearable
		fullWidth
		color="primary"
		borderWeight="light"
		helperColor="error"
		helperText={<ErrorMessage name={name} />}
		labelLeft={icon}
		as={InputField}
	/>
);
