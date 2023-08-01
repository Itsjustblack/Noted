import { FC } from "react";
import profilePic from "@images/profilePic.png";
import arrow from "@icons/navIcons/upArrow.svg";

interface ProfileProps {
	userName: string;
	// profilePic: string;
}

const Profile: FC<ProfileProps> = ({ userName }) => {
	return (
		<div className="px-4 h-[48px] py-2 items-center justify-self-end max-w-[193px] w-full flex gap-x-2 bg-black rounded-[100px]">
			<img
				className="w-[32px] h-[32px]"
				src={profilePic}
				alt=""
			/>
			<span className="text-[#DEDEDE] text-sm font-medium">{userName}</span>
			<img
				className="w-4 h-4 cursor-pointer"
				src={arrow}
				alt=""
			/>
		</div>
	);
};

export default Profile;
