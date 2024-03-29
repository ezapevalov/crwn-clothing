import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { selectIsCartOpen } from '../../../store/cart/cart.selector'
import { Link } from "react-router-dom"
import { signOutUser } from "../../../utils/firebase"
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
import CartIcon from "../../cart/cart-icon"
import CartDropdown from "../../cart/cart-dropdown"
import './navigation.styles.scss'

function Navigation() {
	const currentUser =  useSelector(state => state.user.currentUser);
	const isCartOpen =  useSelector(selectIsCartOpen);
	
	return (
	  <nav className="navigation">
		  <Link className="logo-container" to="/">
			  <CrwnLogo className="logo"/>
		  </Link>
		  <div className="nav-links-container">
			  <Link className="nav-link" to="/shop">SHOP</Link>
			  {
			  	currentUser ?
					  <>
						  <span className="nav-link">Hello, {currentUser.email}</span>
						  <span className="nav-link" onClick={signOutUser}>LOGOUT</span>
					  </>
					  :
					  <>
						  <Link className="nav-link" to="/sign-in">SIGN IN</Link>
						  <Link className="nav-link" to="/sign-up">SIGN UP</Link>
					  </>
			  }
				<CartIcon />
		  </div>
		  {isCartOpen && <CartDropdown />}
	  </nav>
	);
}

export default Navigation;