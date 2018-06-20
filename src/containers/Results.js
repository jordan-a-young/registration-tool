import React from "react";
import { Container, Button, Fade } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import Header from "../components/Header";
import ResultsTable from "../components/ResultsTable";

class Results extends React.Component {
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

		this.onRowSelect = this.onRowSelect.bind(this);
	}

	onRowSelect(row) {
		this.setState({
			rowSelected: !this.state.rowSelected,
			selected: row.appID
		});
	}

	render() {
		return (
			<div>
				<Header title="Application Search Results" currentPage="results" />
				<Container>
					<ResultsTable values={this.props.values} />
					<Fade in={this.state.rowSelected}>
						<Button color="success" tag="a" href="/AppInfo">
							Select
						</Button>
					</Fade>
					<Button color="success" tag="a" href="/AppInfo">
						Select
					</Button>
				</Container>
			</div>
		);
	}
}

export default Results;
