import { BiLogOut, BiCalendarPlus } from 'react-icons/bi';
import { MdTitle, MdSubtitles } from 'react-icons/md';
import { List } from './index';
import { useAuth, useNote } from '../zustand';
import { Button, Modal, Row, Spacer, Text, User } from '@nextui-org/react';
import { Input } from './index';
import logo from '../data/user.png';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface INote {
	title: string;
	body: string;
}
const initial: INote = { title: '', body: '' };
const noteSchema = Yup.object({
	title: Yup.string().required('Title is required'),
	body: Yup.string().required('Description is required'),
});

export const MenuJournal = () => {
	const { user, logout } = useAuth();
	const { active, noteAdd, noteLogout } = useNote();

	const [visible, setVisible] = useState(false);

	const handleSubmit = ({title, body}:INote) => {
		noteAdd(user?.uid!, { title, body, date: new Date().getTime() })
		setVisible(false);
	};

	const handleLogout = () => {
		logout();
		noteLogout();
	};

	return (
		<div className={!!active ? 'menu view' : 'menu'}>
			<Row justify="space-between" align="center" css={{ mb: '1em' }}>
				<User zoomed src={logo} name={user?.name} />
				<Button auto flat size="sm" onClick={handleLogout}><BiLogOut /></Button>
			</Row>

			<Row css={{pb: '1em'}}>
				<Button flat css={{w: '100%'}} icon={<BiCalendarPlus />} onClick={() => setVisible(true)}>New Entry</Button>
			</Row>

			<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={() => setVisible(false)}>
				<Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={noteSchema}>
					<Form>
						<Modal.Header>
							<Text b id="modal-title" size={18}>Add a note</Text>
						</Modal.Header>
						<Modal.Body>
							<Input name="title" label="Title" icon={<MdTitle />} />
							<Spacer y={0.1} />
							<Input name="body" label="Description" icon={<MdSubtitles />} />
							<Spacer y={0.1} />
						</Modal.Body>
						<Modal.Footer>
							<Row justify="center">
								<Button type="submit">Save</Button>
							</Row>
						</Modal.Footer>
					</Form>
				</Formik>
			</Modal>

			<List />
		</div>
	);
};
