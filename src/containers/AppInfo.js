import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import axios from "axios";
import Header from "../components/Header";
import OrgInfo from "../components/OrgInfo";
import AdminInfo from "../components/AdminInfo";

class AppInfo extends React.Component {
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
			},
			nppesUrl: "https://npiregistry.cms.hhs.gov/api?number=",
			corsUrl: "https://cors-anywhere.herokuapp.com/",
			data: []
		};

		this.handleNPIFetch = this.handleNPIFetch.bind(this);
	}

	/*componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
			console.log(res);
			const persons = res.data;
			this.setState({ persons });
		});
	}*/

	handleNPIFetch() {
		axios
			.get(this.state.corsUrl + this.state.nppesUrl + this.state.org.npi)
			.then(res => {
				console.log(res);
				const data = res.data.results;
				this.setState({ data });
				console.log(this.state.data);
			});
	}

	render() {
		return (
			<div id="appInfo">
				<Header title="Application Info" currentPage="info" />
				<Container>
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
