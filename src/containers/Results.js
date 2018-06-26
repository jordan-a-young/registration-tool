import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import ResultsTable from "../components/ResultsTable";

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false,
			selected: "",
			data: [
				{
					appID: this.props.values.appID,
					orgName: this.props.values.name,
					taxID: this.props.values.taxID,
					npi: this.props.values.npi,
					address: this.props.values.address,
					status: this.props.values.status
				}
			],
			columns: [
				{
					dataField: "appID",
					text: "Application ID"
				},
				{
					dataField: "orgName",
					text: "Organization Name"
				},
				{
					dataField: "taxID",
					text: "Tax ID"
				},
				{
					dataField: "npi",
					text: "NPI"
				},
				{
					dataField: "address",
					text: "Address"
				},
				{
					dataField: "status",
					text: "Status"
				}
			]
		};
	}

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
