import React, { Component } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Button, Card, CardTitle, CardBody } from "reactstrap";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class UserLogin extends Component {
	state = {
		submitted: false
	};

	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	handleChange = event => {
		const { appStore } = this.props;
		appStore.setUsername(event.target.value);
	};

	handleSubmit = event => {
		const { appStore } = this.props;
		appStore.toggleSelectedResult();
		this.setState({ submitted: !this.state.submitted });
	};

	handleReset = () => {
		this.form && this.form.reset();
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
								onChange={this.handleChange}
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
