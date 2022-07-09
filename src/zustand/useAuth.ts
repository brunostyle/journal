import create from 'zustand';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithRedirect, updateProfile } from 'firebase/auth';
import { auth, googleAuth } from '../firebase';
import { User } from '../interface';

interface IState {
	user: User | null;
	loginUser: (uid: string, name: string) => void;
	login: (email: string, password: string) => void;
	loginWithGoogle: () => void;
	register: (name: string, email: string, password: string) => void;
	logout: () => void;
}

export const useAuth = create<IState>(set => ({
	//STATE INITIAL
	user: null,
	//LOGIN USER
	loginUser: (uid, name) => set(() => ({ user: { uid, name } })),
	//LOGIN
	login: async (email, password) => {
		const { user } = await signInWithEmailAndPassword(auth, email, password);
		const { uid, displayName } = user;
		set(() => ({ user: { uid, name: displayName! } }));
	},
	//LOGIN GOOGLE
	loginWithGoogle: async () => {
		const { user } = await signInWithRedirect(auth, googleAuth);
		const { uid, displayName } = user;
		set(() => ({ user: { uid, name: displayName! } }));
	},
	//REGISTER
	register: async (name, email, password) => {
		const { user } = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(user, { displayName: name });
		const { uid } = user;
		set(() => ({ user: { uid, name } }));
	},
	//LOGOUT
	logout: async () => {
		await signOut(auth);
		set({ user: null });
	},
}));
