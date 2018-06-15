import React from "react";
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Card,
	CardBody,
	CardTitle
} from "reactstrap";
import { Redirect } from "react-router-dom";

class SearchForm extends React.Component {
	constructor() {
		super();
		this.state = { submitted: false };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data.get("orgName"));
		console.log(data.get("appID"));
		console.log(data.get("taxID"));
		this.setState({ submitted: true });
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to="/Results" />;
		} else {
			return (
				<div id="searchForm">
					<Card>
						<CardTitle>Search for an application</CardTitle>
						<CardBody>
							<Form id="searchForm" onSubmit={this.handleSubmit}>
								<FormGroup>
									<Label for="orgName">
										Organization Name:
									</Label>
									<Input
										type="text"
										name="orgName"
										id="orgName"
										placeholder="Organization Name"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="appID">Application ID: </Label>
									<Input
										type="number"
										name="appID"
										id="appID"
										placeholder="Application ID"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="taxID">Tax ID: </Label>
									<Input
										type="number"
										name="taxID"
										id="taxID"
										placeholder="Tax ID"
									/>
								</FormGroup>
								<div id="formButtons">
									<Button type="submit" color="success">
										Submit
									</Button>{" "}
									<Button type="reset" color="danger">
										Reset
									</Button>
								</div>
							</Form>
						</CardBody>
					</Card>
				</div>
			);
		}
	}
}

export default SearchForm;
