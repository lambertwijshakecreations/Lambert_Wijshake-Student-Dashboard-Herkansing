const WincTheme = {
	area: {
		height: 500
	},
	// axis
	axis: {
		style: {
			axis: {
				fill: "transparent",
				stroke: "#90A4AE",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			},
			axisLabel: {
				textAnchor: "middle",
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 15,
				letterSpacing: "normal",
				padding: 8,
				fill: "#2a303c",
				stroke: "transparent",
				strokeWidth: 0
			},
			grid: {
				fill: "none",
				stroke: "none"
			},
			ticks: {
				fill: "transparent",
				size: 5,
				stroke: "#90A4AE",
				strokeWidth: 1
			},
			tickLabels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 10,
				letterSpacing: "normal",
				padding: 3,
				fill: "#2a303c",
				stroke: "transparent",
				strokeWidth: 0
			}
		},
		width: 350,
		height: 350,
		padding: 10
	},
	//bars
	bar: {
		style: {
			data: {
				fill: "#4a90e2",
				padding: 0,
				strokeWidth: 0
			},
			labels: {
				fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
				fontSize: 8,
				letterSpacing: "normal",
				padding: 8,
				fill: "#455A64",
				stroke: "transparent",
				strokeWidth: 0
			}
		},
		width: 350,
		height: 350,
		padding: 20
	},
	//display of chart
	chart: {
		width: 1200,
		height: 500,
		padding: 100
	},
	//collor of bars
	group: {
		width: 350,
		height: 350,
		padding: 50
	}
};

export default WincTheme;
