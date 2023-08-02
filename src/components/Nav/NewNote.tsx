import plus from "@icons/navIcons/plus.svg";
import { Link } from "react-router-dom";

const NewNote = () => {
	return (
		<Link
			to="/new-note"
			className="bg-[#72C357] hover:rotate-180 rounded-full p-3 flex absolute right-[41px] bottom-7 items-center justify-center transition duration-500 hover:scale-110"
		>
			<img
				className="w-8 h-8 "
				src={plus}
				alt=""
			/>
			{/* <h3 className="font-bold text-xl w-full text-white">New</h3> */}
		</Link>
	);
};

export default NewNote;
