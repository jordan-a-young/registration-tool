import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { Redirect } from "react-router-dom";

class UserLogin extends Component {
	constructor() {
		super();
		this.state = {
			submitted: false
		};
	}

	handleSubmit = () => {
		this.setState({ submitted: true });
	};

	handleReset = () => {
		this.form && this.form.reset();
		this.setState({ submitted: false });
	};

	render() {
		if (this.state.submitted) return <Redirect to="/ApplicationSearch" />;

		return (
			<div>
				<Card>
					<CardBody>
						<CardTitle>Login</CardTitle>
						<AvForm
							id="searchForm"
							onValidSubmit={this.handleSubmit}
							onReset={this.handleReset}
							ref={c => (this.form = c)}
						>
							<AvField
								id="user"
								name="user"
								label="User ID: "
								type="text"
								placeholder="User ID"
								required
							/>
							<FormGroup>
								<Button type="submit" color="success">
									Login
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

export default UserLogin;
