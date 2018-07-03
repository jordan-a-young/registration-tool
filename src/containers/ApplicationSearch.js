import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class ApplicationSearch extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Application Search");
		console.log(appStore.state);
	}

	render() {
		return (
			<div>
				<Header currentPage="search" />
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
