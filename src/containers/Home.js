import React from "react";
import Header from "../components/Header";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header title="Home" currentPage="home" />
			</div>
		);
	}
}

export default Home;
