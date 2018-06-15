import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

class ApplicationSearch extends React.Component {
	render() {
		return (
			<div>
				<Header title="Application Search" />
				<Breadcrumb tag="nav">
					<BreadcrumbItem tag="a" href="/">
						Home
					</BreadcrumbItem>
					<BreadcrumbItem active>Search</BreadcrumbItem>
				</Breadcrumb>
				<SearchForm />
			</div>
		);
	}
}

export default ApplicationSearch;
