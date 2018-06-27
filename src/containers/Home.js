import React, { Component } from "react";
import Header from "../components/Header";
import UserLogin from "../components/UserLogin";
import { Container, Col } from "reactstrap";

class Home extends Component {
	render() {
		return (
			<div>
				<Header title="Home" currentPage="home" />
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
