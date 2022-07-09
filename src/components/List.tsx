import { Item } from './index';
import { useNote } from '../zustand';

export const List = () => {
	const { notes } = useNote();
	return (
		<div className="container__list">
			{notes?.map(item => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
};
