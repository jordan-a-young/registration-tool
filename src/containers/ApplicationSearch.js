import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

class ApplicationSearch extends Component {
	render() {
		return (
			<div>
				<Header title="Application Search" currentPage="search" />
				<Container>
					<Col sm="6">
						<SearchForm />
					</Col>
				</Container>
			</div>
		);
	}
}

export default ApplicationSearch;
