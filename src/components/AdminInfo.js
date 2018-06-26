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
								<strong>Title: </strong>
								{this.props.info.title}
							</ListGroupItem>
							<ListGroupItem>
								<strong>First Name: </strong>
								{this.props.info.fName}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Last Name: </strong>
								{this.props.info.lName}
							</ListGroupItem>
							<ListGroupItem>
								<strong>User ID: </strong>
								{this.props.info.userID}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Email: </strong>
								{this.props.info.email}
							</ListGroupItem>
							<ListGroupItem>
								<strong>Phone Number: </strong>
								{this.props.info.phone}
							</ListGroupItem>
						</ListGroup>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default AdminInfo;
