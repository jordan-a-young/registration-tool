import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import Home from "../containers/Home";
import ApplicationSearch from "../containers/ApplicationSearch";
import Results from "../containers/Results";
import AppInfo from "../containers/AppInfo";
import { appStore, stateStore } from "../stores";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const stores = { appStore, stateStore };
window.stateStore = stateStore;
configure({ enforceActions: true });

const App = () => (
	<Provider {...stores}>
		<BrowserRouter basename="/">
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/ApplicationSearch" component={ApplicationSearch} />
					<Route
						path="/Results"
						render={props => <Results values={APPINFO} {...props} />}
					/>
					<Route
						path="/AppInfo"
						render={props => <AppInfo data={APPLICATION} {...props} />}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

/*class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/ApplicationSearch" component={ApplicationSearch} />
					<Route
						path="/Results"
						render={props => <Results values={APPINFO} {...props} />}
					/>
					<Route
						path="/AppInfo"
						render={props => <AppInfo data={APPLICATION} {...props} />}
					/>
				</Switch>
			</div>
		);
	}
}*/

const APPINFO = [
	{
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
	},
	{
		appID: "1234567",
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
	}
];

const APPLICATION = {
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
