import upArrow from "@icons/navIcons/upChevron.svg";
import downArrow from "@icons/navIcons/downChevron.svg";
import leftArrow from "@icons/navIcons/back.svg";
import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const AddNote = () => {
	const [open, setopen] = useState(false);
	const [body, setBody] = useState("");

	const countWords = (str: string): number => {
		if (str == "") return 0;
		else return str.trim().split(/\s+/).length;
	};

	return (
		<Layout>
			<div className="flex flex-col pt-[80px] relative">
				<header className="px-8 flex w-full items-center mb-5">
					<Link to="/">
						<img
							className="w-6 h-6 object-cover mr-40"
							src={leftArrow}
							alt=""
						/>
					</Link>
					<h1 className="text-[30px] font-bold tracking-wide text-center mr-10">New Note</h1>
					<div
						onClick={() => setopen((prev) => !prev)}
						className="flex cursor-pointer items-center space-x-1 pl-3 pr-2 py-1 rounded-xl bg-[#F7F7F7]"
					>
						<span className="text-black font-semibold text-[15px] ">Tags</span>
						<img
							className="w-5 h-5 object-cover"
							src={open ? upArrow : downArrow}
							alt=""
						/>
					</div>
				</header>
				<main className="px-8">
					<input
						className="w-full text-[30px] font-bold tracking-wide mb-2 placeholder:text-[#56595F]"
						placeholder="Add a Title..."
						type="text"
					/>
					<div className="flex space-x-2 text-[#7b7b7b] font-semibold text-[15px] mb-6">
						<span>Tuesday, August 1st 2023</span>
						<span>10:30</span>
						<span>|</span>
						<span>{`${countWords(body)} Words`}</span>
					</div>
					<textarea
						onChange={(e) => setBody(e.target.value)}
						placeholder="Type Something..."
						className="w-full text-xl placeholder:text-[#56595F] text-black max-h-[350px] overflow-y-auto transition duration-500"
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
