import React from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './navigation'

function Layout() {
	return (
	  <div className="layout">
	    <Navigation />
		  
		<hr />
		
		<Outlet />
	  </div>
	);
}

export default Layout;