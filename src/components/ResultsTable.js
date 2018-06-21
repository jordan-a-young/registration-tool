import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class ResultsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false,
			selected: "",
			row: {},
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

	onRowSelect() {}

	render() {
		const selectRow = {
			mode: "checkbox",
			clickToSelect: true,
			bgColor: "#C8E6C9",
			hideSelectColumn: true
		};
		return (
			<div>
				<BootstrapTable
					id="resultTable"
					keyField="appID"
					data={this.state.data}
					columns={this.state.columns}
					selectRow={selectRow}
				/>
				<Button color="success" tag="a" href="/AppInfo">
					Select
				</Button>
			</div>
		);
	}
}

export default ResultsTable;
