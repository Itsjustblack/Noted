import { FC } from "react";

interface NavItemProps {
	title: string;
	path: string;
}

interface NotificationProps {
	notifications: number;
}

const Notification: FC<NotificationProps> = ({ notifications }) => {
	return <div className="px-[6px] rounded py-1 justify-items-end text-[#8DD076] bg-[#8dd0761f] text-[12px] font-semibold">{notifications}</div>;
};

const NavItem: FC<NavItemProps> = ({ title, path }) => {
	return (
		<button className="group h-[52px]">
			<div className="group-focus:bg-[#dedede14] flex items-center overflow-hidden pr-6">
				<span className="w-[6px] h-[56px] bg-transparent group-focus:bg-[#72C357]"></span>
				<div className="flex items-center gap-x-5 py-4 pl-6 w-full">
					<img
						className="w-[20px] h-[20px]"
						src={`/src/assets/icons/NavIcons/${path}.svg`}
						alt=""
					/>
					<h2 className="w-full font-medium text-base text-start">{title}</h2>
				</div>
				<Notification notifications={8} />
			</div>
		</button>
	);
};

export default NavItem;
