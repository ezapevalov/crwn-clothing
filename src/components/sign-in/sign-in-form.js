import React, { useRef } from 'react';
import {
	signInAuthUserWithEmailAndPassword
} from '../../utils/firebase'

const SignInForm = () => {
	const emailRef = useRef();
	const passRef = useRef();
	
	const clearSignUpForm = () => {
	  emailRef.current.value = "";
		passRef.current.value = "";
	};
	
	const handleSubmitSignInForm = async (event) => {
		event.preventDefault();
		
		const email = emailRef.current.value;
		const pass = passRef.current.value;
		
		// TODO validate
		
		try {
			const response = await signInAuthUserWithEmailAndPassword(email, pass);
			console.log(response);
			
			clearSignUpForm();
			alert("user logged");
		} catch (error) {
			
			if(error.code === 'auth/wrong-password') {
				alert('incorrect password');
			} else if (error.code === 'auth/user-not-found') {
				alert('user not found');
			}
			
			console.log(error);
		}
	};
	
	return (
	  <>
		<h2>Sign In Form</h2>
		
		<form onSubmit={handleSubmitSignInForm}>
		  <label>Email</label>
		  <input ref={emailRef} type="email" name="email" />
		  <br/>
		  
		  <label>Password</label>
		  <input ref={passRef} type="password" name="password" />
		  <br/>
		  
		  <button type="submit">Sign In</button>
		</form>
	  </>
	);
};

export default SignInForm;