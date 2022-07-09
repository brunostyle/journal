import create from 'zustand';
import { DB } from '../firebase';
import { getDocs, addDoc, collection, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { Note } from '../interface';

interface NewNote {
	title: string;
	body: string;
   date: number;
}

interface IState {
	notes: Note[] | [];
	active: Note | null;
   noteActive: (note:Note) => void;
	clearNote: () => void;
	noteAdd: (uid: string, note:NewNote) => void;
	noteLoad: (uid: string) => void;
	noteUpdate: (uid: string, note: Note) => void;
	noteDelete: (uid: string, note: Note) => void;
	noteLogout: () => void;
}

export const useNote = create<IState>(set => ({
	//STATE INITIAL
	notes: [],
	active: null,
	//ACTIVE NOTE
   noteActive: (note) => set(state => ({...state, active: note})),
	clearNote: () => set(state => ({ ...state, active: null})),
	//ADD NOTE
	noteAdd: async (uid, note) => {
		const { id } = await addDoc(collection(DB, `${uid}/journal/notes`), note);
		const noteSave = { id, ...note };
		set(state => ({
			...state,
			active: noteSave,
			notes: [...state.notes!, noteSave],
		}));
	},
	//LOAD NOTES
	noteLoad: async uid => {
		const notesSnap = await getDocs(collection(DB, `${uid}/journal/notes`));
		let notes: any[] = [];
		notesSnap.forEach(note => {
			notes.push({ ...note.data(), id: note.id });
		});
		set(state => ({
			...state,
			notes,
		}));
	},
	//UPDATE NOTE
	noteUpdate: async (uid, newNote) => {
		const noteUrl: Note = { ...newNote };
		if (!noteUrl.url) {
			delete noteUrl.url;
		}
		const noteFirestore = { ...noteUrl };
		await updateDoc(doc(DB, `${uid}/journal/notes/${newNote.id}`), noteFirestore);
		set(state => ({
			...state,
			active: null,
			notes: state.notes?.map(note => (note.id === newNote.id ? newNote : note)),
		}));
	},
	//DELETE NOTE
	noteDelete: async (uid, note) => {
		await deleteDoc(doc(DB, `${uid}/journal/notes/${note.id}`));
		set(state => ({
			...state,
			active: null,
			notes: state.notes?.filter(n => n.id !== note.id),
		}));
	},
   noteLogout: () => set(state => ({notes: [], active: null}))
}));
