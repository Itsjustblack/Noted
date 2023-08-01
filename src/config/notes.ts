import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const getNotes = async () => {
	const notesCollectionRef = collection(db, "notes");
	const data = await getDocs(notesCollectionRef);
	return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
