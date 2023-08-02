import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";

// At the end of the Project, Remove all Any Types

export const getNotes = async () => {
	const notesCollectionRef = collection(db, "notes");
	const data = await getDocs(notesCollectionRef);
	return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getNote = async (id: any) => {
	const docRef = doc(db, "notes", id);
	const data = await getDoc(docRef);
	if (data.exists()) {
		return data?.data();
	} else console.log("Document does not exist");
};
