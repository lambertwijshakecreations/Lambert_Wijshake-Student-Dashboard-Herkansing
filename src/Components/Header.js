import React from "react";
import winc from "../Images/winc.png";

const Header = () => {
	return (
		<div className="header-container">
			<img src={winc} alt="winc-logo" />
			<h1>WINC Student Dashboard</h1>
			<img src={winc} alt="winc-logo" />
		</div>
	);
};

export default Header;
