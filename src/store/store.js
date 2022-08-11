import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './root-reducer'

const middleWares = [thunk];

if(process.env.NODE_ENV !== 'production') {
	middleWares.push(logger);
}

const composeEnhancers = (
	process.env.NODE_ENV !== 'production'
	&& window
	&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user', 'categories']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);