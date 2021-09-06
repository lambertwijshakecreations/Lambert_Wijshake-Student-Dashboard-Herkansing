import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import WincTheme from "./WincTheme";

const Diagram = (props) => {
	let tValues = [...props.toBeShownInChart];

	const funComponent = (
		<VictoryBar
			data={props.toBeShownInChart}
			x="assignment"
			y="funRating"
			color="#658AE0"
		/>
	);

	const difficultyComponent = (
		<VictoryBar
			data={props.toBeShownInChart}
			x="assignment"
			y="difficultyRating"
			color="#0D41BD"
		/>
	);

	const bothComponents = [funComponent, difficultyComponent];

	return (
		<div className="diagram">
			<VictoryChart
				domainPadding={10}
				zoomDomain={{ x: [0, 3], y: [0, 20] }}
				theme={WincTheme}
			>
				<VictoryGroup offset={3}>
					{props.filterGraph.both ? bothComponents : null}
					{props.filterGraph.onlyFun ? funComponent : null}
					{props.filterGraph.onlyDifficulty ? difficultyComponent : null}
				</VictoryGroup>
				<VictoryAxis
					tickValues={tValues}
					tickFormat={props.toBeShownInChart.map((item) => item.assignment)}
					style={{
						tickLabels: {
							angle: 75,
							textAnchor: "start",
							fontSize: "8"
						}
					}}
				/>
				<VictoryAxis dependentAxis />
			</VictoryChart>
		</div>
	);
};

export default Diagram;
