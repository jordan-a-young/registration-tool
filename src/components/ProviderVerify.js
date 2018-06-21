import React from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ProviderVerify extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data.results,
			popoverOpen: false,
			nppesUrl: "https://npiregistry.cms.hhs.gov/api?number=",
			corsUrl: "https://cors-anywhere.herokuapp.com/",
			npi: this.props.data.npi,
			address: "",
			value: "",
			copied: false
		};
		this.toggle = this.toggle.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.searchGoogle = this.searchGoogle.bind(this);
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

	searchGoogle() {
		if (this.state.address) window.open("https://www.google.com");
		else {
			console.log("You need to verify npi first");
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
					placement="top"
					isOpen={this.state.popoverOpen}
					target="verifyBtn"
				>
					<PopoverHeader>NPPESS Results</PopoverHeader>
					<PopoverBody>{info}</PopoverBody>
				</Popover>
				{"  "}
				<CopyToClipboard
					text={this.props.orgName + " " + this.state.address}
					onCopy={this.searchGoogle}
				>
					<Button color="info">Search Google</Button>
				</CopyToClipboard>
			</div>
		);
	}
}

export default ProviderVerify;
