import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './store/store'
import './index.css'

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
	  
	  <ReduxProvider store={store}>
		  <PersistGate persistor={persistor} loading={null} />
		  
	      <BrowserRouter>
	        <App />
	      </BrowserRouter>
		  
	  </ReduxProvider>
	  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
/// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/// reportWebVitals();
