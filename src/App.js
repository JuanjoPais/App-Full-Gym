import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListOptions from "./components/ListOptions/ListOptions";
import OptionDetail from "./components/OptionDetail/OptionDetail";
import Navbar from "./components/Navbar/Navbar";
import Portada from "./components/Portada/Portada";
import Frases from "./components/Frases/Frases";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Portada />
								<Frases />
								<ListOptions />
							</>
						}
					/>
					<Route path="/category/:cateroryId" />
					<Route path="/detail/:productId" element={<OptionDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
