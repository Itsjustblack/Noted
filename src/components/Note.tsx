const Note: React.FC = () => {
	return (
		<div className="max-h-[200px] max-w-[220px] min-w-[170px] border border-[#EDEDED] rounded-lg px-3 py-4">
			<h3 className="font-bold trackng-wide">Template Text</h3>
			<p className="text-[#4E4E4E] text-left text-[12px] text-ellipsis max-h-[190px] overflow-hidden mb-3">Hello client name, thank you for the opportunity. Right now, I have a team to work with and I’m the UI designer there.</p>
			<span className="tracking-tight text-[#A1A1A1] text-[11px]">1 days ago</span>
		</div>
	);
};

export default Note;
