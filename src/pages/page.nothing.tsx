import { FaPaintBrush } from 'react-icons/fa'
import { Container, Text } from '@nextui-org/react';

export const NothingPage = () => (
	<Container display="flex" direction="column" justify="center" alignItems="center" css={{height: '100%'}}>
		<FaPaintBrush size="2em" />
		<Text>
			Create something <br /> or create an entry!
		</Text>
	</Container>
);