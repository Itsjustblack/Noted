import downArrow from "@icons/navIcons/downArrow.svg";
import plus from "@icons/navIcons/plus.svg";
import { Link } from "react-router-dom";

const NewNote = () => {
	return (
		<Link
			to="/new-note"
			className="bg-[#72C357] rounded-[100px] py-4 px-5 w-[230px] flex absolute right-[41px] bottom-7 items-center"
		>
			<img
				className="w-6 h-6 mr-2"
				src={plus}
				alt=""
			/>
			<h3 className="font-bold text-xl w-full text-white">New</h3>
			<img
				className="w-6 h-6 justify-end"
				src={downArrow}
				alt=""
			/>
		</Link>
	);
};

export default NewNote;
