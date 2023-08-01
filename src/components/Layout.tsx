import { useEffect } from "react";
import { useLocation } from "react-router";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		console.log(pathname);
	}, [pathname]);
	return <div className="relative h-full w-full">{children}</div>;
};

export default Layout;
