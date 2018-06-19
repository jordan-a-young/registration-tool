import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	ListGroup,
	ListGroupItem
} from "reactstrap";
import ProviderVerify from "./ProviderVerify";
import axios from "axios";

class OrgInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			nppesUrl: "https://npiregistry.cms.hhs.gov/api?number=",
			corsUrl: "https://cors-anywhere.herokuapp.com/"
		};

		this.handleNPIFetch = this.handleNPIFetch.bind(this);
	}

	handleNPIFetch() {
		const config = {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json; charset=utf-8"
			},
			data: null,
			crossDomain: true
		};
		axios
			.get(this.state.corsUrl + this.state.nppesUrl + this.props.npi, config)
			.then(res => {
				console.log(res);
				const data = res.data.results;
				this.setState({ data });
				console.log(this.state.data);
			});
	}

	render() {
		return (
			<div id="orgInfo">
				<Card>
					<CardBody>
						<CardTitle>Organization Information</CardTitle>
						<ListGroup>
							<ListGroupItem>
								<strong>Name: </strong>
								{this.props.info.name}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Type: </strong>
								{this.props.info.type}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Tax ID: </strong>
								{this.props.info.taxID}
							</ListGroupItem>
							<ListGroupItem>
								<strong>NPI: </strong>
								{this.props.info.npi}
							</ListGroupItem>
							<ListGroupItem>
								<ProviderVerify data={this.state.data} />
							</ListGroupItem>
							<ListGroupItem>
								<strong>Physical Address: </strong>
								{this.props.info.address}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Zipcode: </strong>
								{this.props.info.zip}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Phone Number: </strong>
								{this.props.info.phone}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Region(s): </strong>
								{this.props.info.region}
							</ListGroupItem>
						</ListGroup>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default OrgInfo;
