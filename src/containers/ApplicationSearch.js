import React from "react";
import { Container, Col } from "reactstrap";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

class ApplicationSearch extends React.Component {
	render() {
		return (
			<div>
				<Header title="Application Search" currentPage="search" />
				<Container>
					<Col md="auto">
						<SearchForm />
					</Col>
				</Container>
			</div>
		);
	}
}

export default ApplicationSearch;
