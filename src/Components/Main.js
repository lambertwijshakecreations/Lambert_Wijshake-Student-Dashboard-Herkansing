import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import studentData from "./Data/studentdata.json";
import Diagram from "./Diagram";
import NavBars from "./NavBars";
import FilterButtons from "./FilterButtons";

import {
	Evelyn,
	Aranka,
	Floris,
	Hector,
	Martina,
	Maurits,
	Rahima,
	Sandra,
	Wietske,
	Storm
} from "./Students";

const renameStudentData = studentData.map((ass) => {
	return {
		name: ass["Wie ben je?"],
		assignment: ass["Welke opdracht of welk project lever je nu in?"],
		funRating: ass["Hoe leuk vond je deze opdracht?"],
		difficultyRating: ass["Hoe moeilijk vond je deze opdracht?"]
	};
});

class Main extends Component {
	constructor() {
		super();
		this.state = {
			allData: renameStudentData,
			toBeShownInChart: [],
			studentsReady: false,
			currentStudent: "",
			filterGraph: {
				onlyFun: false,
				onlyDifficulty: false,
				both: true
			}
		};
	}

	componentDidMount() {
		this.addAvgRatingsToState();
		const students = this.GetStudents();
		this.setState({
			students: students,
			studentsReady: true
		});
		// console.log(this.state.allData);
	}

	GetAssignments = () => {
		const allDataCopy = [...this.state.allData];
		let assignments = allDataCopy.map((item) => {
			return item.assignment;
		});
		const uniqueSet = new Set(assignments);
		const uniqueAssignments = [...uniqueSet];
		const uniqueAssignmentsObj = uniqueAssignments.map((item) => {
			return { assignment: item };
		});
		return uniqueAssignmentsObj;
	};

	GetStudents = () => {
		const allDataCopy = [...this.state.allData];
		const students = allDataCopy.map((item) => {
			return item.name;
		});
		const uniqueSet = new Set(students);
		const uniqueStudentArr = [...uniqueSet];
		return uniqueStudentArr;
	};

	addAvgRatingsToState = () => {
		const allDataCopy = [...this.state.allData];
		let assignments = this.GetAssignments();
		assignments.forEach((item) => {
			item["funRating"] = 0;
			item["difficultyRating"] = 0;
		});
		allDataCopy.forEach((item) => {
			const correctItem = assignments.filter((obj) => {
				return obj.assignment === item.assignment;
			});
			assignments.forEach((obj) => {
				if (obj.assignment === correctItem[0].assignment) {
					obj.funRating = obj.funRating + item.funRating;
					obj.difficultyRating = obj.difficultyRating + item.difficultyRating;
				}
			});
		});
		assignments.forEach((item) => {
			const avgFunRating = item.funRating / this.GetStudents().length;
			const avgDifficultyRating =
				item.difficultyRating / this.GetStudents().length;
			item.funRating = avgFunRating;
			item.difficultyRating = avgDifficultyRating;
		});
		this.setState({ toBeShownInChart: assignments }, () =>
			console.log(this.state.toBeShownInChart)
		);
	};

	handleStudentChange = (student) => {
		console.log(student);
		if (student === "Average ratings") {
			this.addAvgRatingsToState();
		} else {
			this.setState({ currentStudent: student }, () =>
				this.getDataPerStudent()
			);
		}
	};

	getDataPerStudent = () => {
		// console.log(this.state.allData);
		const allDataCopy = [...this.state.allData];
		const filteredData = allDataCopy.filter((obj) => {
			return obj.name === this.state.currentStudent;
		});
		this.setState({ toBeShownInChart: filteredData });
	};

	handleFilterButtonChange = (e) => {
		e.preventDefault();
		switch (e.target.value) {
			case "fun":
				this.setState({
					filterGraph: {
						onlyFun: true,
						onlyDifficulty: false,
						both: false
					}
				});
				break;
			case "difficulty":
				this.setState({
					filterGraph: {
						onlyFun: false,
						onlyDifficulty: true,
						both: false
					}
				});
				break;
			case "both":
				this.setState({
					filterGraph: {
						onlyFun: false,
						onlyDifficulty: false,
						both: true
					}
				});
				break;
			default:
				console.log("Error");
		}
	};

	render() {
		return (
			<Router>
				<div>
					<div className="main-container">
						{this.state.studentsReady ? (
							<NavBars
								students={this.state.students}
								handleStudentChange={this.handleStudentChange}
							/>
						) : (
							<h3>Loading...</h3>
						)}
					</div>

					<Switch>
						<Route exact path="/">
							<div className="target-name">Average Ratings:</div>
							<Diagram
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Evelyn">
							<div className="target-name">Evelyn:</div>
							<Evelyn
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Aranka">
							<div className="target-name">Aranka:</div>
							<Aranka
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Floris">
							<div className="target-name">Floris:</div>

							<Floris
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Hector">
							<div className="target-name">Hector:</div>
							<Hector
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Martina">
							<div className="target-name">Martina:</div>
							<Martina
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Maurits">
							<div className="target-name">Maurits:</div>
							<Maurits
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Rahima">
							<div className="target-name">Rahima:</div>
							<Rahima
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Sandra">
							<div className="target-name">Sandra:</div>
							<Sandra
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Wietske">
							<div className="target-name">Wietse:</div>
							<Wietske
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
						<Route exact path="/Storm">
							<div className="target-name">Storm:</div>
							<Storm
								handleStudentChange={this.handleStudentChange}
								toBeShownInChart={this.state.toBeShownInChart}
								filterGraph={this.state.filterGraph}
							/>
						</Route>
					</Switch>
					<FilterButtons
						handleFilterButtonChange={this.handleFilterButtonChange}
					/>
				</div>
			</Router>
		);
	}
}

export default Main;
