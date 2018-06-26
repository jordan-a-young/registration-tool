import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import ResultsTable from "../components/ResultsTable";

class Results extends Component {
	render() {
		return (
			<div>
				<Header title="Application Search Results" currentPage="results" />
				<Container>
					<ResultsTable values={this.props.values} />
				</Container>
			</div>
		);
	}
}

export default Results;
