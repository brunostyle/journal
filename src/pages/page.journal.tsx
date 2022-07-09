import { NothingPage, NotePage } from './index';
import { useNote } from '../zustand';

export const JournalPage = () => {
	const { active } = useNote();

	return <>{active ? <NotePage /> : <NothingPage />}</>;
};
