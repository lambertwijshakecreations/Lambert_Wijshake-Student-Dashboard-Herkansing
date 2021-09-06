import React from "react";
import { Link } from "react-router-dom";

const NavBars = (props) => {
	const selectStudent = [{ name: "Average ratings" }];

	const students = props.students.map((student) => {
		return { name: student };
	});

	const dropdownList = selectStudent.concat(students);

	return (
		<div className="nav-bar">
			{dropdownList.map((item) => {
				if (item.name === "Average ratings") {
					return (
						<Link
							to="/"
							onClick={(e) => props.handleStudentChange(item.name)}
							className="average"
							style={{ textDecoration: "none" }}
						>
							{item.name}
						</Link>
					);
				} else {
					return (
						<Link
							to={`/${item.name}`}
							onClick={(e) => props.handleStudentChange(item.name)}
							style={{ textDecoration: "none" }}
							className="student-name"
						>
							{item.name}
						</Link>
					);
				}
			})}
		</div>
	);
};

export default NavBars;
