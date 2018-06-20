import React from "react";
import { FormGroup, Label, Button, Card, CardTitle } from "reactstrap";
import {
	AvForm,
	AvGroup,
	AvInput,
	AvFeedback
} from "availity-reactstrap-validation";
import { Redirect } from "react-router-dom";

class SearchForm extends React.Component {
	constructor() {
		super();
		this.state = { submitted: false };

		this.handleReset = this.handleReset.bind(this);
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

	handleReset(event) {
		document.getElementById("searchForm").reset();
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to="/Results" />;
		} else {
			return (
				<div>
					<Card>
						<CardTitle>Search for an Application</CardTitle>
						<AvForm
							id="searchForm"
							onSubmit={this.handleSubmit}
							onReset={this.handleReset}
						>
							<AvGroup>
								<Label for="orgName">Organization Name: </Label>
								<AvInput name="orgName" id="orgName" />
								<AvFeedback>Invalid organization name entered.</AvFeedback>
							</AvGroup>
							<AvGroup>
								<Label for="appID">Application ID: </Label>
								<AvInput name="appID" id="appID" />
								<AvFeedback>
									Application ID should only contain numbers.
								</AvFeedback>
							</AvGroup>
							<AvGroup>
								<Label for="taxID">Tax ID: </Label>
								<AvInput name="taxID" id="taxID" />
								<AvFeedback>Tax ID should only contain numbers.</AvFeedback>
							</AvGroup>
							<FormGroup>
								<Button type="submit" color="success">
									Submit
								</Button>{" "}
								<Button type="reset" color="danger" onClick={this.handleReset}>
									Clear
								</Button>
							</FormGroup>
						</AvForm>
					</Card>
				</div>
			);
		}
	}
}

export default SearchForm;
