import React, { Component } from "react";
import {
	Card,
	CardBody,
	CardTitle,
	ListGroup,
	ListGroupItem
} from "reactstrap";
import ProviderVerify from "./ProviderVerify";

class OrgInfo extends Component {
	render() {
		return (
			<div id="orgInfo">
				<Card>
					<CardBody>
						<CardTitle>Organization Information</CardTitle>
						<ListGroup>
							<ListGroupItem>
								<strong>Name</strong>
								<span className="float-right">{this.props.info.name}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Type</strong>
								<span className="float-right">{this.props.info.type}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Tax ID</strong>
								<span className="float-right">{this.props.info.taxID}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>NPI</strong>
								<span className="float-right">{this.props.info.npi}</span>
							</ListGroupItem>
							<ListGroupItem>
								<span className="float-center">
									<ProviderVerify
										data={this.props.info}
										orgName={this.props.info.name}
										address={this.props.info.address}
									/>
								</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Physical Address</strong>
								<span className="float-right">{this.props.info.address}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Zipcode</strong>
								<span className="float-right">{this.props.info.zip}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Phone Number</strong>
								<span className="float-right">{this.props.info.phone}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Region(s)</strong>
								<span className="float-right">{this.props.info.region}</span>
							</ListGroupItem>
						</ListGroup>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default OrgInfo;
