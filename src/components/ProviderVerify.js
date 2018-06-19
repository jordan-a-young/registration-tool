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
			npi: this.props.npi
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	asdfcomponentDidMount() {
		axios
			.get(this.state.corsUrl + this.state.nppesUrl + this.state.npi)
			.then(res => {
				console.log(res);
				const data = res.data.results;
				console.log(data);
				this.setState({
					data: data.addresses
				});
			});
	}

	render() {
		let info;
		if (this.state.data) info = this.state.data.results;
		else info = "Nothing received";
		return (
			<div>
				<Button color="info" id="verifyBtn" onClick={this.toggle}>
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
