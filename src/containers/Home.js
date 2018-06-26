import React, { Component } from "react";
import Header from "../components/Header";
import { Button, Col } from "reactstrap";

class Home extends Component {
	render() {
		return (
			<div>
				<Header title="Home" currentPage="home" />
				<Col>
					<Button color="success" tag="a" href="/ApplicationSearch">
						Search here!
					</Button>
				</Col>
			</div>
		);
	}
}

export default Home;
