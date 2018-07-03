import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Fade } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class ResultsTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false,
			selected: "",
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
	}

	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	onRowSelect = ({ appID }, isSelected) => {
		if (isSelected) {
			this.setState({
				selected: appID,
				rowSelected: isSelected
			});
		} else {
			this.setState({
				selected: "",
				rowSelected: isSelected
			});
		}
	};

	render() {
		const selectRow = {
			mode: "checkbox",
			clickToSelect: true,
			bgColor: "#C8E6C9",
			hideSelectColumn: true,
			onSelect: this.onRowSelect,
			selected: this.state.selected
		};

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
