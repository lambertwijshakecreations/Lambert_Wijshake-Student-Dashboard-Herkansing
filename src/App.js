import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import "./CSS/App.css";

const App = () => {
	return (
		<div className="app">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
