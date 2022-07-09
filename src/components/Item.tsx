import moment from 'moment';
import { Description } from '../styles';
import { useNote } from '../zustand';
import type { Note } from '../interface';
import { Card, Row, Spacer, Text } from '@nextui-org/react';

export const Item = ({ id, title, body, date, url }: Note) => {
	const noteDate = moment(date);
	const { noteActive } = useNote();

	const handleActive = () => noteActive({ id, title, body, date, url });

	return (
		<>
			<Card isPressable onClick={handleActive}>
				<Card.Header>
					<Text>{title}</Text>
				</Card.Header>
				<Card.Body css={{py: 0}}>
					<Description>{body}</Description>
				</Card.Body>
				<Card.Footer>
					<Row justify='flex-end'>
						<Text small color="primary">{noteDate.format('dddd')} {noteDate.format('Do')}</Text>
					</Row>
				</Card.Footer>
			</Card>
			<Spacer />
		</>
	);
};
