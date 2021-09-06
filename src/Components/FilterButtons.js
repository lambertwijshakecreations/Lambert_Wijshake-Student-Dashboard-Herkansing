import React from "react";

const FilterButtons = (props) => {
	return (
		<div className="filter-buttons">
			<form>
				<button
					className="filter-button btn1"
					value="fun"
					onClick={(e) => props.handleFilterButtonChange(e)}
				>
					Show fun rating
				</button>
				<button
					className="filter-button btn2"
					value="difficulty"
					onClick={(e) => props.handleFilterButtonChange(e)}
				>
					Show difficulty rating
				</button>
				<button
					className="filter-button btn3"
					value="both"
					onClick={(e) => props.handleFilterButtonChange(e)}
				>
					Show both ratings
				</button>
			</form>
		</div>
	);
};

export default FilterButtons;
