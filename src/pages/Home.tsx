import QuickNote from "../components/QuickNote";
import Notes from "../components/Notes";
import QuickTips from "../components/QuickTips";
import Layout from "../components/Layout";

const Home = () => {
	return (
		<Layout>
			<div className="relative bg-[#F7F7F7] pb-8">
				<header className="w-full h-[326px] pt-[100px] px-8 bg-heroBg bg-cover bg-center bg-no-repeat">
					<div className="w-full text-[#F2F2F2]">
						<h1 className="font-bold gap-y-1 tracking-wide text-[36px] ">Good Morning, Jason.</h1>
						<h2 className="font-semibold">WEDNESDAY, AUGUST 17, 2022</h2>
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
