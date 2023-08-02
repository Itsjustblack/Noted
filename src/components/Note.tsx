import { Link } from "react-router-dom";
import { NoteType } from "..";

// eslint-disable-next-line react/prop-types
const Note: React.FC<NoteType> = ({ title, body, id }) => {
	return (
		<Link
			to={`/edit-note/${id}`}
			className="h-[200px] w-[220px] border border-[#EDEDED] rounded-lg px-3 py-4 hover:scale-105 transition-transform duration-300"
		>
			<h3 className="font-bold trackng-wide mb-1 w-full text-center overflow-hidden text-ellipsis">{title}</h3>
			<p className="text-[#4E4E4E] break-words text-left text-[12px] text-ellipsis h-[110px] overflow-hidden mb-3">{body}</p>
			<span className="tracking-tight text-[#A1A1A1] text-[11px]">2 days ago</span>
		</Link>
	);
};

export default Note;
