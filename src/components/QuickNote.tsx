import others from "@icons/navIcons/others.svg";

// Set a min Height and setup h-fit => to take up less space
const QuickNote: React.FC = () => {
	return (
		<div className="pt-7 rounded-xl px-6 max-w-[370px] h-[216px] bg-[#EFF3FE]">
			<header className="flex justify-between mb-5">
				<h2 className="font-bold tracking-wider text-lg">QUICK NOTE📌</h2>
				<img
					src={others}
					className="w-6 h-6"
					alt=""
				/>
			</header>
			<div className="flex flex-col space-y-1">
				<p className="text-sm">1. Post story instagram event 17 Agustus (Independence day!!)</p>
				<p className="text-sm">2. Check clients feedback on Figma ASAP</p>
				<p className="text-sm">3. Copy files on your cloud storage</p>
			</div>
		</div>
	);
};

export default QuickNote;
