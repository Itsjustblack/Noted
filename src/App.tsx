import Home from "@pages/Home";
import SideNav from "./components/Nav/SideNav";
import { Route, Routes } from "react-router";
import AddNote from "@pages/AddNote";
import EditNote from "@pages/EditNote";

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
					element={<AddNote />}
				/>
				<Route
					path="/edit-note"
					element={<EditNote />}
				/>
			</Routes>
		</SideNav>
	);
}

export default App;
