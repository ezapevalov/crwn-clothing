import React, { useRef } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase'

const SignUpForm = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passRef = useRef();
	const confRef = useRef();
	
	const clearSignUpForm = () => {
		nameRef.current.value = "";
	  emailRef.current.value = "";
		passRef.current.value = "";
		confRef.current.value = "";
	};
	
	const handleSubmitSignUpForm = async (event) => {
		event.preventDefault();
		
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const pass = passRef.current.value;
		const conf = confRef.current.value;
		
		// TODO validate
		
		if(pass !== conf) {
			alert("passwords don't match");
			return;
		}
		
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, pass);
			
			await createUserDocumentFromAuth(user, {displayName:name});
			
			clearSignUpForm();
		} catch (error) {
			
			if(error.code === 'auth/email-already-in-use') {
				alert('such email already exists');
			}
			
			console.log(error);
		}
		
		
	};
	
	return (
	  <>
		<h2>Sign Up Form</h2>
		
		<form onSubmit={handleSubmitSignUpForm}>
		  <label>Name</label>
		  <input ref={nameRef} type="text" name="name" />
		  <br/>
			
		  <label>Email</label>
		  <input ref={emailRef} type="email" name="email" />
		  <br/>
		  
		  <label>Password</label>
		  <input ref={passRef} type="password" name="password" />
		  <br/>
		  
		  <label>Confirm Password</label>
		  <input ref={confRef} type="password" name="confirmPassword" />
		  <br/>
			
		  <button type="submit">Sign Up</button>
		</form>
	  </>
	);
};

export default SignUpForm;