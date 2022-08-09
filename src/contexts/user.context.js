import React, { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

const USER_INITIAL_STATE = {
	currentUser: null
};

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER"
};


const userReducer = (state, action) => {
	console.log("dispatched", action);
	const { type, payload } = action;
	
	switch(type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				currentUser: payload
			};
		default:
			throw new Error("userReducer: unknown action");
	}
};

export const UserProvider = ({ children }) => {
	const [{ currentUser }, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
	const setCurrentUser = user => {
		dispatch({
			type: USER_ACTION_TYPES.SET_CURRENT_USER,
			payload: user
		})
	};
	
	console.log("currentUser", currentUser);
	
	const value = { currentUser, setCurrentUser };
	
	useEffect(() => onAuthStateChangedListener(async (user) => {
			if(user) {
				await createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		}), []);
	
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};