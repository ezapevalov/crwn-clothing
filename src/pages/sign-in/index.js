import React, {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth
} from '../../utils/firebase';
import SignInForm from '../../components/sign-in/sign-in-form';

function SignIn() {
	
	useEffect(async () => {
		const firebaseRedirectResult = await getRedirectResult(auth);
		
		if(firebaseRedirectResult) {
			const userDocRef = await createUserDocumentFromAuth(firebaseRedirectResult.user);
		}
	}, []);
	
	const loginGoogleUserViaPopup = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	
	return (
	  <div>
		  <h1>Sign In Page</h1>
		  <button onClick={loginGoogleUserViaPopup}>Google Sign In (P)</button>
		  <br/>
		  <button onClick={signInWithGoogleRedirect}>Google Sign In (R)</button>
		  <br/>
		  
		  <SignInForm/>
	  </div>
	);
}

export default SignIn;