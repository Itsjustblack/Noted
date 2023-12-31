import { FC } from "react";
import Logo from "../../assets/icons/logo.svg";
import SearchBar from "../SearchBar";
import NavItem from "./NavItem";
import Profile from "./Profile";

interface SideNavProps {
	children: JSX.Element;
}

const SideNav: FC<SideNavProps> = ({ children }) => {
	return (
		<div className="overflow-hidden w-full">
			<div className="max-w-[260px] fixed h-[100vh] pt-10 bg-[#0E100E] text-white">
				<div className="px-6">
					<img
						src={Logo}
						className="mb-[30px]"
					/>
					<hr className="h-[1px] bg-[#363636] mb-8" />
					<SearchBar />
				</div>
				<div className="flex flex-col w-full space-y-3">
					<NavItem
						title="Home"
						path="home"
					/>
					<NavItem
						title="Notification"
						path="bell"
					/>
					<NavItem
						title="Notes"
						path="notes"
					/>
					<NavItem
						title="Trash"
						path="trash"
					/>
					<NavItem
						title="Settings"
						path="settings"
					/>
				</div>
			</div>
			<div className="pl-[260px]">
				<Profile userName="Jason Aghedo" />
				<div className="overflow-y z-0">{children}</div>
			</div>
		</div>
	);
};

export default SideNav;
