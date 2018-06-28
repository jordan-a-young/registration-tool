import { extendObservable } from "mobx";

class StateStore {
	constructor(state = {}) {
		extendObservable(
			this,
			{
				user: {
					username: null
				},
				form: {
					selectedOrganization: null,
					appID: null,
					taxID: null,
					isSelected: false
				},
				page: {
					title: null
				}
			},
			state
		);
	}
}

export default new StateStore();

export { StateStore };
