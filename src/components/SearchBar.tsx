import search from "../assets/icons/search.svg";
const SearchBar = () => {
	return (
		<div className="w-full flex overflow-hidden space-x-3 px-4 py-3 bg-[#ffffff1f] rounded-lg mb-8">
			<img
				src={search}
				alt="search icon"
				className="object-cover w-[20px] h-[20px]"
			/>
			<input
				placeholder="Search"
				type="text"
				className="bg-transparent w-full placeholder:text-[#DEDEDE] placeholder:text-sm"
			/>
		</div>
	);
};

export default SearchBar;
