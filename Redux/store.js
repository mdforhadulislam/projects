import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { default as thunkMiddleware } from 'redux-thunk';
import reducers from './Reducers/index';


const initialState = {};
const middleware = [thunkMiddleware];
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

