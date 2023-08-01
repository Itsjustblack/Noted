import upArrow from "@icons/navIcons/upChevron.svg";
import downArrow from "@icons/navIcons/downChevron.svg";
import { useState } from "react";
import Layout from "../components/Layout";

const AddNote = () => {
	const [open, setopen] = useState(false);
	return (
		<Layout>
			<div className="flex flex-col pt-[100px]">
				<header className="px-8 flex w-full space-x-4 items-center text-[#7b7b7b] font-semibold text-sm">
					<span className="">Tuesday, August 1st 2023</span>
					<span className="">|</span>
					<span className="">2 Words</span>
					<div
						onClick={() => setopen((prev) => !prev)}
						className="flex items-center space-x-1 pl-3 pr-2 py-1 rounded-xl bg-[#F7F7F7]"
					>
						<span className="text-black">Tags</span>
						<img
							className="w-5 h-5 object-cover"
							src={open ? upArrow : downArrow}
							alt=""
						/>
					</div>
				</header>
				<main className="px-8">
					<input
						className="w-full text-[50px] font-bold tracking-wide mb-3 px-4"
						placeholder="Enter a Title..."
						type="text"
					/>
					<textarea
						className="w-full text-xl text-black shadow-[0px_0.6px_6px_0px_#0000001a] border rounded-lg py-4 px-5 h-[350px] overflow-y-auto"
						cols={30}
						rows={10}
					></textarea>
					{/* <p className="text-lg text-black shadow-xl border-2 rounded-lg py-4 px-5 h-[350px] overflow-y-auto w-full">
					Talented and meticulous Front-End Developer boasting 2 years of experience. Demonstrates unwavering dedication to delivering extraordinary user experiences by employing cutting-edge web development techniques. Strives to remain at the forefront of industry trends and technologies. Actively pursuing a challenging position where I can leverage my expertise and make significant
					contributions to the triumph of a dynamic organization.
				</p> */}
				</main>
				{/* Mobile Way of selecting Tags */}
				{/* <footer className="flex w-full space-x-5 px-5 py-2 overflow-x bg-[#F7F7F7] justify-self-end">
				<div className="w-fit border-2 font-semibold rounded-lg bg-white px-2 py-1">To-Do List</div>
				<div className="w-fit border-2 font-semibold rounded-lg bg-white px-2 py-1">Project Plan</div>
				<div className="w-fit border-2 font-semibold rounded-lg bg-white px-2 py-1">Meeting</div>
			</footer> */}
			</div>
		</Layout>
	);
};

export default AddNote;
