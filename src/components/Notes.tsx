import { FC } from "react";
import others from "@icons/navIcons/others.svg";
import calendar from "@icons/calendar.svg";
import Note from "./Note";

const Notes: FC = () => {
	return (
		<div className="mt-[170px] rounded-xl max-h-[60vh] mx-8 py-6 px-6 bg-white justify-between shadow-[0px_4px_32px_0px_#00000014]">
			<header className="flex justify-between mb-4">
				<h2 className="text-[#4E4E4E] text-lg font-bold tracking-wide">NOTES 🗒</h2>
				<div className="flex gap-x-4">
					<img
						src={others}
						className="w-6 h-6"
						alt=""
					/>
					<img
						src={calendar}
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
			<div className="w-full overflow-hidden px-[35px] py-3">
				<div className="flex space-x-[18px] relative">
					<Note />
					<Note />
					<Note />
					<Note />
					<Note />
					<Note />
				</div>
			</div>
		</div>
	);
};

export default Notes;
