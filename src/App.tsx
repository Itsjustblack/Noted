import Home from "@pages/Home";
import SideNav from "./components/Nav/SideNav";

function App() {
	return (
		<div>
			<SideNav>
				<Home />
			</SideNav>
		</div>
	);
}

export default App;
