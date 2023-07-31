import { FC } from "react";
import leftArrow from "@icons/navIcons/leftArrow.svg";
import rightArrow from "@icons/navIcons/rightArrow.svg";

const Pointers: FC = () => {
	return (
		<div className="flex space-x-4">
			<button className="rounded-full flex items-center justify-center bg-black opacity-60 w-10 h-10">
				<img
					className="object-cover w-6 h-6"
					src={leftArrow}
					alt=""
				/>
			</button>
			<button className="rounded-full flex items-center justify-center bg-black opacity-60 w-10 h-10">
				<img
					className="object-cover w-6 h-6"
					src={rightArrow}
					alt=""
				/>
			</button>
		</div>
	);
};

export default Pointers;
