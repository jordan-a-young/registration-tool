import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const products = [];

function addProducts(quantity) {
	const startId = products.length;
	for (let i = 0; i < quantity; i++) {
		const id = startId + i;
		products.push({
			id: id,
			name: "Item name " + id,
			price: 2100 + i
		});
	}
}

addProducts(100);

const APPINFO = [
	{
		appID: "19999999",
		name: "Availity",
		type: "Clearinghouse",
		taxID: "123456789",
		npi: "1740375401",
		status: "Live",
		address: "123 This Way Dr",
		zip: "32256",
		orgPhone: "800-282-4548",
		region: ["Florida"],
		title: "Boss",
		fName: "Indiana",
		lName: "Jones",
		userID: "HanSolo",
		email: "hford@movies.com",
		adminPhone: "555-555-5555"
	},
	{
		appID: "1234567",
		name: "Availity",
		type: "Clearinghouse",
		taxID: "123456789",
		npi: "1740375401",
		status: "Live",
		address: "123 This Way Dr",
		zip: "32256",
		orgPhone: "800-282-4548",
		region: ["Florida"],
		title: "Boss",
		fName: "Indiana",
		lName: "Jones",
		userID: "HanSolo",
		email: "hford@movies.com",
		adminPhone: "555-555-5555"
	}
];

const app = [{ appID: "123", name: "Availity", taxID: "321" }];

export default class FormExample extends React.Component {
	constructor(props) {
		super(props);
		this.onRowSelect = this.onRowSelect.bind(this);
		this.state = {
			selected: []
		};
	}

	onRowSelect({ appID }, isSelected) {
		if (isSelected && this.state.selected.length !== 1) {
			this.setState({
				selected: [...this.state.selected, appID].sort()
			});
		} else {
			this.setState({
				selected: this.state.selected.filter(it => it !== appID)
			});
		}
		return false;
	}

	render() {
		const selectRowProp = {
			mode: "checkbox",
			clickToSelect: true,
			onSelect: this.onRowSelect,
			selected: this.state.selected
		};

		const options = {
			sortName: "appID",
			sortOrder: "desc"
		};

		return (
			<BootstrapTable
				ref="table"
				data={APPINFO}
				selectRow={selectRowProp}
				options={options}
			>
				<TableHeaderColumn dataField="appID" isKey={true}>
					Application ID
				</TableHeaderColumn>
				<TableHeaderColumn dataField="name">
					Organization Name
				</TableHeaderColumn>
				<TableHeaderColumn dataField="taxID">Tax ID</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}
