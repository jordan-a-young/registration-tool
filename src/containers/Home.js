import React, { Component } from "react";
import Header from "../components/Header";
import UserLogin from "../components/UserLogin";
import { Container, Col } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Home extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Home");
		console.log(appStore.state);
	}

	render() {
		return (
			<div>
				<Header currentPage="home" />
				<Container>
					<Col sm="6">
						<UserLogin />
					</Col>
				</Container>
			</div>
		);
	}
}

export default Home;
