import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

const HomeBread = props => {
	if (props.currentPage === "home") {
		return (
			<Breadcrumb>
				<BreadcrumbItem active>Home</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/ApplicationSearch">
					Search
				</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/Results">
					Results
				</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/AppInfo">
					Application
				</BreadcrumbItem>
			</Breadcrumb>
		);
	}
	return null;
};

const SearchBread = props => {
	if (props.currentPage === "search") {
		return (
			<Breadcrumb tag="nav">
				<BreadcrumbItem tag="a" href="/">
					Home
				</BreadcrumbItem>
				<BreadcrumbItem active>Search</BreadcrumbItem>
			</Breadcrumb>
		);
	}
	return null;
};

const ResultsBread = props => {
	if (props.currentPage === "results") {
		return (
			<Breadcrumb tag="nav">
				<BreadcrumbItem tag="a" href="/">
					Home
				</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/ApplicationSearch">
					Search
				</BreadcrumbItem>
				<BreadcrumbItem active>Results</BreadcrumbItem>
			</Breadcrumb>
		);
	}
	return null;
};

const AppBread = props => {
	if (props.currentPage === "info") {
		return (
			<Breadcrumb tag="nav">
				<BreadcrumbItem tag="a" href="/">
					Home
				</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/ApplicationSearch">
					Search
				</BreadcrumbItem>
				<BreadcrumbItem tag="a" href="/Results">
					Results
				</BreadcrumbItem>
				<BreadcrumbItem active>Application</BreadcrumbItem>
			</Breadcrumb>
		);
	}
	return null;
};

@inject("appStore")
@observer
class Header extends Component {
	static propTypes = {
		appStore: PropTypes.shape({
			state: PropTypes.any
		})
	};

	render() {
		const { appStore } = this.props;
		return (
			<div>
				<h1 id="header" className="text-center">
					{appStore.state.page.title}
				</h1>
				<HomeBread currentPage={this.props.currentPage} />
				<SearchBread currentPage={this.props.currentPage} />
				<ResultsBread currentPage={this.props.currentPage} />
				<AppBread currentPage={this.props.currentPage} />
			</div>
		);
	}
}

export default Header;
