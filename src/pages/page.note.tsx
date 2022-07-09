import { Form, Formik } from 'formik';
import { Input, Textarea } from '../components';
import { GiCancel } from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { useNote, useAuth } from '../zustand';
import * as Yup from 'yup';
import { Button, Col, Container, Row, Spacer, Text } from '@nextui-org/react';
import moment from 'moment';

interface INote {
	title: string;
	body: string;
}
const initial: INote = { title: '', body: '' };
const noteSchema = Yup.object({
	title: Yup.string().required('Title is required'),
	body: Yup.string().required('Description is required'),
});

export const NotePage = () => {
	const { active, noteDelete, noteUpdate, clearNote } = useNote();
	const { user } = useAuth();
	const noteDate = moment(active?.date);

	const handleSubmit = (data: any) => {
		noteUpdate(user?.uid!, data);
	};

	return (
		<Formik initialValues={active || initial} onSubmit={handleSubmit} validationSchema={noteSchema} enableReinitialize>
			<Form>
				<Row justify="space-between" css={{ padding: '1em', }}>
					<Col>
						<Text h4>{`${noteDate.format('dddd')} ${noteDate.format('Do')}`}</Text>
					</Col>
					<Col>
						<Row justify="flex-end">
							<Button size="xs" color="error" auto onClick={() => noteDelete(user?.uid!, active!)} icon={<AiFillDelete />}>Delete</Button>
							<Spacer />
							<Button size="xs" type="submit" auto icon={<FaPaintBrush />}>Update</Button>
							<Spacer />
							<Button size="xs" flat auto onClick={clearNote} icon={<GiCancel />}>Cancel</Button>
						</Row>
					</Col>
				</Row>
				<Container css={{padding: '1em'}}>
					<Input border={false} name="title" label="Some awesome title" />
					<Spacer />
					<Textarea name="body" label="What happened today" />
				</Container>
			</Form>
		</Formik>
	);
};
