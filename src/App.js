import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import ApplicationSearch from "./containers/ApplicationSearch";
import Results from "./containers/Results";
import AppInfo from "./containers/AppInfo";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						path="/ApplicationSearch"
						component={ApplicationSearch}
					/>
					<Route
						path="/Results"
						render={props => (
							<Results values={APPINFO} {...props} />
						)}
					/>
					<Route
						path="/AppInfo"
						render={props => <AppInfo data={APPINFO} {...props} />}
					/>
				</Switch>
			</div>
		);
	}
}

const APPINFO = {
	appID: "19999999",
	name: "Availity",
	type: "Clearinghouse",
	taxID: "123456789",
	npi: "1740375401",
	status: "Live",
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

export default App;
