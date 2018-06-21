import React from "react";
import { FormGroup, Label, Button, Card, CardTitle } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Redirect } from "react-router-dom";

class SearchForm extends React.Component {
	constructor() {
		super();
		this.state = { data: [], submitted: false };

		this.handleReset = this.handleReset.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.setState({ data: values, submitted: !this.state.submitted });
	}

	handleReset() {
		this.form && this.form.reset();
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
							onValidSubmit={this.handleSubmit}
							onReset={this.handleReset}
							ref={c => (this.form = c)}
						>
							<AvField
								id="orgName"
								name="orgName"
								label="Organization Name: "
								type="text"
								placeholder="Organization Name"
							/>
							<AvField
								id="appID"
								name="appID"
								label="Application ID: "
								type="text"
								placeholder="Application ID"
								validate={{ number: true }}
							/>
							<AvField
								id="taxID"
								name="taxID"
								label="Tax ID: "
								type="text"
								placeholder="Tax ID"
								validate={{ number: true }}
							/>
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
