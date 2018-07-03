import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import ResultsTable from "../components/ResultsTable";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

@inject("appStore")
@observer
class Results extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	componentWillMount() {
		const { appStore } = this.props;
		appStore.setPageTitle("Application Search Results");
		console.log(appStore.state);
	}

	render() {
		return (
			<div>
				<Header currentPage="results" />
				<Container>
					<ResultsTable values={this.props.values} />
				</Container>
			</div>
		);
	}
}

export default Results;
