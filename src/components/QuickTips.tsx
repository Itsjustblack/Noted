import others from "@icons/navIcons/others.svg";
import camera from "@icons/camera.svg";
import checked from "@icons/checked.svg";

const QuickTips: React.FC = () => {
	return (
		<div className="pt-7 rounded-xl px-6 h-[216px] bg-white max-w-[700px]">
			<header className="flex justify-between mb-5">
				<h2 className="font-bold tracking-wider text-lg">QUICK TIPS⚡️</h2>
				<img
					src={others}
					className="w-6 h-6"
					alt=""
				/>
			</header>
			<div className="flex space-x-4">
				{/* hover:shadow-[4px_4px_20px_0px_#00000014] hover:border-none transition-shadow duration-600 */}
				<div className="w-[200px] h-[116px] border border-[#DEDEDE] py-5 px-[18px] rounded-lg relative">
					<img
						className="w-5 h-5 mb-3"
						src={camera}
						alt=""
					/>
					<h3 className="font-semibold text-sm tracking-tight line-through mb-1">Scan with your camera</h3>
					<p className="text-[#A1A1A1] tracking-tight text-[12px] text-ellipsis whitespace-nowrap overflow-hidden">Turn your old notes into digital one, it will never get lost and go</p>
					<img
						className="w-20 h-20 absolute top-0 -right-2"
						src={checked}
						alt=""
					/>
				</div>
				<div className="w-[200px] h-[116px] border border-[#DEDEDE] py-5 px-[18px] rounded-lg relative">
					<img
						className="w-5 h-5 mb-3"
						src={camera}
						alt=""
					/>
					<h3 className="font-semibold text-sm tracking-tight line-through mb-1">Scan with your camera</h3>
					<p className="text-[#A1A1A1] tracking-tight text-[12px] text-ellipsis whitespace-nowrap overflow-hidden">Turn your old notes into digital one, it will never get lost and go</p>
					<img
						className="w-20 h-20 absolute top-0 -right-2"
						src={checked}
						alt=""
					/>
				</div>
				<div className="w-[200px] h-[116px] border border-[#DEDEDE] py-5 px-[18px] rounded-lg relative">
					<img
						className="w-5 h-5 mb-3"
						src={camera}
						alt=""
					/>
					<h3 className="font-semibold text-sm tracking-tight line-through mb-1">Scan with your camera</h3>
					<p className="text-[#A1A1A1] tracking-tight text-[12px] text-ellipsis whitespace-nowrap overflow-hidden">Turn your old notes into digital one, it will never get lost and go</p>
					<img
						className="w-20 h-20 absolute top-0 -right-2"
						src={checked}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default QuickTips;
