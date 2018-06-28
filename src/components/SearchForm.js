import React, { Component } from "react";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			submitted: false
		};
	}

	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	handleSubmit = event => {
		const { appStore } = this.props;
		appStore.setSelectedOrganization(this.form._inputs.orgName.value);
		appStore.setAppID(this.form._inputs.appID.value);
		appStore.setTaxID(this.form._inputs.taxID.value);
		appStore.toggleSelectedResult();
		this.setState({ submitted: !this.state.submitted });
	};

	handleReset = () => {
		this.form && this.form.reset();
	};

	render() {
		if (this.state.submitted) return <Redirect to="/Results" />;

		return (
			<div>
				<Card>
					<CardBody>
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
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default SearchForm;
