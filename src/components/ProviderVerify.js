import React, { Component } from "react";
import {
	Button,
	Popover,
	PopoverBody,
	PopoverHeader,
	Tooltip
} from "reactstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ProviderVerify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nppesUrl: "https://npiregistry.cms.hhs.gov/api?number=",
			corsUrl: "https://cors-anywhere.herokuapp.com/",
			npi: this.props.data.npi,
			address: "",
			copied: false,
			popoverOpen: false,
			tooltipOpen: false
		};
	}

	popoverToggle = () => {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	};

	handleSearch = () => {
		if (this.state.address) {
			this.popoverToggle();
		} else {
			axios
				.get(this.state.corsUrl + this.state.nppesUrl + this.state.npi)
				.then(res => {
					const data = res.data.results;
					const address =
						data[0].addresses[0].address_1 +
						" " +
						data[0].addresses[0].address_2 +
						" " +
						data[0].addresses[0].city +
						", " +
						data[0].addresses[0].state;
					this.setState({
						address: address
					});
				});
			this.popoverToggle();
		}
	};

	tooltipToggle = () => {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		});
	};

	searchGoogle = () => {
		if (this.state.address) window.open("https://www.google.com");
	};

	render() {
		let info, tooltipText;
		if (this.state.address) {
			info = this.state.address;
			tooltipText =
				"Click here to open Google search and copy organization info to clipboard.";
		} else {
			info = "Loading...";
			tooltipText = "Verify NPI first to search Google.";
		}
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
					text={this.props.orgName + " " + this.props.address}
					onCopy={this.searchGoogle}
				>
					<Button color="info" id="searchBtn">
						Search Google
					</Button>
				</CopyToClipboard>
				<Tooltip
					placement="right"
					isOpen={this.state.tooltipOpen}
					target="searchBtn"
					toggle={this.tooltipToggle}
				>
					{tooltipText}
				</Tooltip>
			</div>
		);
	}
}

export default ProviderVerify;
