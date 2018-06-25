import { action, computed } from "mobx";

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
	setOrganizations = event => {
		this.state.form.organizations = valueFromEvent(event);
	};

	@action
	setSelectedOrganization = event => {
		this.state.form.selectedOrganization = valueFromEvent(event);
	};

	@action
	onSelectedOrganization = event => {
		const id = valueFromEvent(event);
		this.state.form.organizations.forEach(org => {
			if (org.id === id) {
				this.state.form.selectedOrganization = org;
			}
		});
		this.getProviders(this.state.form.selectedOrganization.customerId);
	};

	@action
	setProviders = event => {
		this.state.form.providers = valueFromEvent(event);
	};

	@action
	onSelectedProvider = event => {
		const id = valueFromEvent(event);
		this.state.form.providers.forEach(provider => {
			if (provider.id === id) {
				this.state.form.selectedProvider = provider;
				this.setProverNpi(provider.npi);
			}
		});
	};

	@computed
	get isProviderDisabled() {
		return this.state.form.selectedOrganization === null;
	}

	@action
	setMemberId = event => {
		this.state.form.memberId = valueFromEvent(event);
	};

	@action
	setProverNpi = event => {
		this.state.form.npi = valueFromEvent(event);
	};

	@action
	setPageTitle(title) {
		this.state.page.title = title;
	}

	@action
	toggleAcceptedAgreement = () => {
		this.state.form.acceptTerms = this.state.form.acceptTerms;
	};

	@action
	toggleSelectedResult = event => {
		this.state.form.isSelected = !this.state.form.isSelected;
	};
}

export default AppStore;
