import { useQuery } from "@tanstack/react-query";
import { Note, getNotes } from "../services/noteService";

const useNotes = () => {
	return useQuery<Note[], Error>({
		queryKey: ["notes"],
		queryFn: getNotes,
		onSuccess: (data) => console.log(data),
		staleTime: 24 * 60 * 60 * 1000, // 24 Hours
		keepPreviousData: true,
	});
};

export default useNotes;
