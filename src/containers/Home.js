import React from "react";
import Header from "../components/Header";
import FormExample from "../components/AvField";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header title="Home" currentPage="home" />
				<FormExample />
			</div>
		);
	}
}

export default Home;
