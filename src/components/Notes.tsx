import loading from "@icons/loading.svg";
import others from "@icons/navIcons/others.svg";
import { motion } from "framer-motion";
import useNotes from "../hooks/useNotes";
import NewNote from "./Nav/NewNote";
import Note from "./Note";

const Notes = () => {
	const { data: notes, isLoading } = useNotes();

	return (
		<div className="relative mt-[170px] rounded-xl min-h-[300px] max-h-[60vh] mx-8 py-6 px-6 bg-white justify-between shadow-[0px_4px_32px_0px_#00000014]">
			<header className="flex justify-between mb-4">
				<h2 className="text-[#4E4E4E] text-lg font-bold tracking-wide">NOTES 🗒</h2>
				<div className="flex gap-x-4">
					<img
						src={others}
						className="w-6 h-6"
						alt=""
					/>
				</div>
			</header>
			<nav className="flex items-center space-x-5 mb-4">
				<button className="text-[#4E4E4E] tracking-wide pb-2 focus:text-[#72C357] focus:font-semibold border-transparent border-b-2 focus:border-b-[#72C357] transition-colors duration-500">Recently</button>
				<button className="text-[#4E4E4E] tracking-wide pb-2 focus:text-[#72C357] focus:font-semibold border-transparent border-b-2 focus:border-b-[#72C357] transition-colors duration-500">Suggested</button>
				<button className="text-[#4E4E4E] tracking-wide pb-2 focus:text-[#72C357] focus:font-semibold border-transparent border-b-2 focus:border-b-[#72C357] transition-colors duration-500">Documents</button>
				<button className="text-[#4E4E4E] tracking-wide pb-2 focus:text-[#72C357] focus:font-semibold border-transparent border-b-2 focus:border-b-[#72C357] transition-colors duration-500">Images</button>
			</nav>
			{!isLoading ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="w-full py-3 flex space-x-[18px] relative"
				>
					{notes?.map((note, index) => (
						<Note
							key={index}
							id={note.id}
							title={note?.title}
							body={note?.body}
						/>
					))}
				</motion.div>
			) : (
				<img
					className="h-20 w-full"
					src={loading}
				/>
			)}
			<NewNote />
		</div>
	);
};

export default Notes;
