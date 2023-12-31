import { FC } from "react";
import leftArrow from "@icons/navIcons/leftArrow.svg";
import rightArrow from "@icons/navIcons/rightArrow.svg";
import { useNavigate } from "react-router";

const Pointers: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="flex space-x-4">
			<div
				onClick={() => navigate(-1)}
				className="cursor-pointer rounded-full flex items-center justify-center bg-black opacity-60 w-10 h-10 hover:shadow-lg hover:scale-110 transition-transform duration-500 z-50"
			>
				<img
					className="object-cover w-6 h-6"
					src={leftArrow}
					alt=""
				/>
			</div>
			<div
				onClick={() => navigate(1)}
				className="cursor-pointer rounded-full flex items-center justify-center bg-black opacity-60 w-10 h-10 hover:shadow-lg hover:scale-110 transition-transform duration-500"
			>
				<img
					className="object-cover w-6 h-6"
					src={rightArrow}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Pointers;
