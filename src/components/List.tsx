import { Item } from './index';
import { ContainerList } from '../styles';
import { useNote } from '../zustand';

export const List = () => {
	const { notes } = useNote();
	return (
		<ContainerList>
			{notes?.map(item => (
				<Item key={item.id} {...item} />
			))}
		</ContainerList>
	);
};
