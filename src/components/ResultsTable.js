import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Fade } from "reactstrap";

class ResultsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false,
			selected: [],
			columns: [
				{
					dataField: "appID",
					text: "Application ID"
				},
				{
					dataField: "name",
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
		this.toggle = this.toggle.bind(this);
	}

	onRowSelect({ appID }, isSelected) {
		if (isSelected && this.state.selected.length !== 1) {
			this.setState({
				selected: [...this.state.selected, appID].sort(),
				rowSelected: isSelected
			});
		} else {
			this.setState({
				selected: this.state.selected.filter(it => it !== appID),
				rowSelected: isSelected
			});
		}

		return false;
	}

	toggle() {
		this.setState({ rowSelected: !this.state.rowSelected });
	}

	render(isSelected) {
		const selectRow = {
			mode: "checkbox",
			clickToSelect: true,
			bgColor: "#C8E6C9",
			hideSelectColumn: true,
			onSelect: this.onRowSelect,
			selected: this.state.selected
		};
		console.log(this.state.rowSelected);

		return (
			<div>
				<BootstrapTable
					id="resultTable"
					ref="table"
					keyField="appID"
					data={this.props.values}
					columns={this.state.columns}
					selectRow={selectRow}
				/>

				<Fade in={this.state.rowSelected}>
					<Button color="success" id="fadeBtn" tag="a" href="/AppInfo">
						Select
					</Button>
				</Fade>
			</div>
		);
	}
}

export default ResultsTable;
