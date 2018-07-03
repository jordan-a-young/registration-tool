import React, { Component } from "react";
import {
	Card,
	CardBody,
	CardTitle,
	ListGroup,
	ListGroupItem
} from "reactstrap";

class AdminInfo extends Component {
	render() {
		return (
			<div id="adminInfo">
				<Card>
					<CardBody>
						<CardTitle>Administrator Information</CardTitle>
						<ListGroup>
							<ListGroupItem>
								<strong>Title</strong>
								<span className="float-right">{this.props.info.title}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>First Name</strong>
								<span className="float-right">{this.props.info.fName}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Last Name</strong>
								<span className="float-right">{this.props.info.lName}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>User ID</strong>
								<span className="float-right">{this.props.info.userID}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Email</strong>
								<span className="float-right">{this.props.info.email}</span>
							</ListGroupItem>
							<ListGroupItem>
								<strong>Phone Number</strong>
								<span className="float-right">{this.props.info.phone}</span>
							</ListGroupItem>
						</ListGroup>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default AdminInfo;
