import { useEffect } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

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
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6 }}
			className="relative h-full w-full"
		>
			{children}
		</motion.div>
	);
};

export default Layout;
