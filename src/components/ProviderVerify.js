import React from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import axios from "axios";

class ProviderVerify extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data.results,
			popoverOpen: false,
			nppesUrl: "https://npiregistry.cms.hhs.gov/api?number=",
			corsUrl: "https://cors-anywhere.herokuapp.com/",
			npi: this.props.data.npi,
			address: ""
		};
		this.toggle = this.toggle.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	handleSearch() {
		if (this.state.address) {
			this.toggle();
		} else {
			axios
				.get(this.state.corsUrl + this.state.nppesUrl + this.state.npi)
				.then(res => {
					const data = res.data.results;
					const address =
						data[0].addresses[0].address_1 +
						"\n" +
						data[0].addresses[0].address_2 +
						"\n" +
						data[0].addresses[0].city +
						", " +
						data[0].addresses[0].state;
					this.setState({
						address: address
					});
				});
			this.toggle();
		}
	}

	render() {
		let info;
		if (this.state.address) info = this.state.address;
		else info = "Loading...";
		return (
			<div>
				<Button color="info" id="verifyBtn" onClick={this.handleSearch}>
					Verify NPI
				</Button>
				<Popover
					placement="right"
					isOpen={this.state.popoverOpen}
					target="verifyBtn"
				>
					<PopoverHeader>NPPESS Results</PopoverHeader>
					<PopoverBody>{info}</PopoverBody>
				</Popover>
			</div>
		);
	}
}

export default ProviderVerify;
