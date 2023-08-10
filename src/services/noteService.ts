import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

// At the end of the Project, Remove all Any Types
// Abstract code into a Class

// class Data<T> {
// 	colName: string;
// 	id: string;
// 	constructor(colName: string, id: string) {
// 		this.colName = colName;
// 		this.id = id;
// 	}

// 	dataConverter: FirestoreDataConverter<T> = {
// 		toFirestore(note: T): DocumentData {
// 			return { ...note };
// 		},

// 		fromFirestore(docSnap: QueryDocumentSnapshot): T {
// 			return docSnap.data() as T;
// 		},
// 	};

// 	getAll = async () => {
// 		const colRef = collection(db, this.colName).withConverter(noteConverter);
// 		const data = await getDocs(colRef);
// 		return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// 	};
// }

export interface Note {
	id: string;
	title: string;
	body: string;
}

const noteConverter: FirestoreDataConverter<Note> = {
	toFirestore(note: Note): DocumentData {
		return { ...note };
	},

	fromFirestore(docSnap: QueryDocumentSnapshot): Note {
		return docSnap.data() as Note;
	},
};

export const getNotes = async (): Promise<Note[]> => {
	const data = await getDocs(collection(db, "notes").withConverter(noteConverter));
	return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getNote = async (id: string) => {
	const data = await getDoc(doc(db, "notes", id).withConverter(noteConverter));
	if (data.exists()) {
		return { ...data.data(), id: data.id };
	} else console.log("Document does not exist");
};
