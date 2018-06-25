import React from "react";
import Header from "../components/Header";
import { Button, Col } from "reactstrap";
import FormExample from "../components/FormExample";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header title="Home" currentPage="home" />
				<Col>
					<Button color="success" tag="a" href="/ApplicationSearch">
						Search here!
					</Button>
					<FormExample />
				</Col>
			</div>
		);
	}
}

export default Home;
