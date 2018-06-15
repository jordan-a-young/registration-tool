import ApplicationSearch from "./ApplicationSearch";
import Results from "./Results";
import AppInfo from "./AppInfo";
import App from "./App";
import Home from "./Home";
import React from "react";
import { Route, Switch } from "react-router-dom";

const routes = (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/ApplicationSearch" component={ApplicationSearch} />
		<Route
			path="/Results"
			render={props => <Results values={APPINFO} {...props} />}
		/>
		<Route
			path="/AppInfo"
			render={props => <AppInfo data={APPINFO} {...props} />}
		/>
	</Switch>
);

const name = "Availity";

const APPINFO = {
	name: "Availity",
	type: "Clearinghouse",
	taxID: "123456789",
	npi: "9876543210",
	address: "123 This Way Dr",
	zip: "32256",
	orgPhone: "800-282-4548",
	region: ["Florida"],
	title: "Boss",
	fName: "Indiana",
	lName: "Jones",
	userID: "HanSolo",
	email: "hford@movies.com",
	adminPhone: "555-555-5555"
};

export default routes;
