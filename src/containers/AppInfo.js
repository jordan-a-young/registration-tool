import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Header from "../components/Header";
import OrgInfo from "../components/OrgInfo";
import AdminInfo from "../components/AdminInfo";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class AppInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			org: {
				name: this.props.data.name,
				type: this.props.data.type,
				taxID: this.props.data.taxID,
				npi: this.props.data.npi,
				address: this.props.data.address,
				zip: this.props.data.zip,
				phone: this.props.data.orgPhone,
				region: [this.props.data.region]
			},
			admin: {
				title: this.props.data.title,
				fName: this.props.data.fName,
				lName: this.props.data.lName,
				userID: this.props.data.userID,
				email: this.props.data.email,
				phone: this.props.data.adminPhone
			}
		};
	}

	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Application Info");
		console.log(appStore.state);
	}

	render() {
		return (
			<div id="appInfo">
				<Header currentPage="info" />
				<Container>
					<h4>Application: {this.props.data.appID}</h4>
					<Row>
						<Col sm="6">
							<OrgInfo info={this.state.org} />
						</Col>
						<Col sm="6">
							<AdminInfo info={this.state.admin} />
						</Col>
					</Row>
					<Row>
						<Col sm="6">
							<Card>
								<CardBody>
									<div id="appInfoBtns">
										<Button color="success" type="submit">
											Submit
										</Button>{" "}
										<Button color="info" type="submit">
											Update Status
										</Button>{" "}
										<Button color="info" tag="a" href="/Results">
											Search Results
										</Button>{" "}
										<Button color="danger" tag="a" href="/ApplicationSearch">
											Search Again
										</Button>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AppInfo;
