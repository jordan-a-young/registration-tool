import React from "react";
import Header from "../components/Header";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header title="Home" />
				<Breadcrumb tag="nav">
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
			</div>
		);
	}
}

export default Home;
