import QuickNote from "../components/QuickNote";
import Notes from "../components/Notes";
import QuickTips from "../components/QuickTips";
import Layout from "../components/Layout";
import LazyLoadImage from "../components/LazyLoadImage";
import heroBg from "@images/heroBg.png";

const Home = () => {
	return (
		<Layout>
			<div className="relative bg-[#F7F7F7] pb-8">
				<header className="w-full h-[326px] pt-[80px]">
					<LazyLoadImage
						src={heroBg}
						alt="Hero image"
						className="w-full absolute top-0 z-0"
					/>
					<div className="w-full z-10 relative px-8">
						{/* Add Some Crazy Falling Letters Animation */}
						<h1 className="font-bold gap-y-1 tracking-wide text-[45px] text-white">Good Morning, Jason</h1>
						<h2 className="font-semibold text-[#F2F2F2]">WEDNESDAY, AUGUST 17, 2022</h2>
					</div>
				</header>
				<div className="flex absolute px-8 space-x-6 top-[240px]">
					<QuickTips />
					<QuickNote />
				</div>
				<Notes />
			</div>
		</Layout>
	);
};

export default Home;
