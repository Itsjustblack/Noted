import Home from "@pages/Home";
import SideNav from "./components/Nav/SideNav";
import { Route, Routes } from "react-router";
import ViewNote from "@pages/ViewNote";

function App() {
	return (
		<SideNav>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/new-note"
					element={<ViewNote />}
				/>
				<Route
					path="/edit-note/:id"
					element={<ViewNote />}
				/>
			</Routes>
		</SideNav>
	);
}

export default App;
