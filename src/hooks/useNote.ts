import { useQuery } from "@tanstack/react-query";
import { Note, getNote } from "../services/noteService";

const useNote = (id: string) => {
	return useQuery<Note | undefined, Error>({
		queryKey: ["notes", id],
		queryFn: () => getNote(id),
	});
};

export default useNote;
