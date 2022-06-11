import React from 'react';
import {  Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
import './navigation.styles.scss'

function Navigation() {
	return (
	  <nav className="navigation">
		  <Link className="logo-container" to="/">
			  <CrwnLogo className="logo"/>
		  </Link>
		  <div className="nav-links-container">
			  <Link className="nav-link" to="/shop">SHOP</Link>
			  <Link className="nav-link" to="/sign-in">SIGN IN</Link>
			  <Link className="nav-link" to="/sign-up">SIGN UP</Link>
		  </div>
	  </nav>
	);
}

export default Navigation;