import { action } from "mobx";

const valueFromEvent = event => {
	if (event && event.target && typeof event.target.value !== "undefined") {
		return event.target.value;
	}
	return event;
};

class AppStore {
	constructor(state) {
		this.state = state;
	}

	@action
	setSelectedOrganization = event => {
		this.state.form.selectedOrganization = valueFromEvent(event);
	};

	@action
	setAppID = event => {
		this.state.form.appID = valueFromEvent(event);
	};

	@action
	setTaxID = event => {
		this.state.form.taxID = valueFromEvent(event);
	};

	@action
	setPageTitle(title) {
		this.state.page.title = title;
	}

	@action
	toggleSelectedResult = event => {
		this.state.form.isSelected = !this.state.form.isSelected;
	};

	@action
	setUsername = event => {
		this.state.user.username = valueFromEvent(event);
	};
}

export default AppStore;
