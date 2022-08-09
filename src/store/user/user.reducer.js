const USER_INITIAL_STATE = {
	currentUser: null
};

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER"
};


export const userReducer = (state = USER_INITIAL_STATE, action) => {
	const { type, payload } = action;
	
	switch(type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				currentUser: payload
			};
		default:
			return state;
	}
};