import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

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
	} else {
		return null;
	}
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
	} else {
		return null;
	}
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
	} else {
		return null;
	}
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
	} else {
		return null;
	}
};

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1 id="header">{this.props.title}</h1>
				<HomeBread currentPage={this.props.currentPage} />
				<SearchBread currentPage={this.props.currentPage} />
				<ResultsBread currentPage={this.props.currentPage} />
				<AppBread currentPage={this.props.currentPage} />
			</div>
		);
	}
}

export default Header;
