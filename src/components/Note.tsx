import { Link } from "react-router-dom";
import { NoteType } from "..";

// eslint-disable-next-line react/prop-types
const Note: React.FC<NoteType> = ({ title, body }) => {
	return (
		<Link
			to="/new-note"
			className="max-h-[200px] max-w-[220px] min-w-[170px] border border-[#EDEDED] rounded-lg px-3 py-4 hover:scale-105 transition-transform duration-300"
		>
			<h3 className="font-bold trackng-wide mb-1">{title}</h3>
			<p className="text-[#4E4E4E] text-left text-[12px] text-ellipsis max-h-[190px] overflow-hidden mb-3">{body}</p>
			<span className="tracking-tight text-[#A1A1A1] text-[11px]">1 days ago</span> {/* 1 days ago */}
		</Link>
	);
};

export default Note;
