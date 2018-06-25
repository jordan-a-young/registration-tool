import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	ListGroup,
	ListGroupItem
} from "reactstrap";
import ProviderVerify from "./ProviderVerify";

class OrgInfo extends React.Component {
	render() {
		console.log(this.props);
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
								<ProviderVerify
									data={this.props.info}
									orgName={this.props.info.name}
								/>
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
