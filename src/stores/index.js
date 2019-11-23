import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
// import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk, logger)

const store = createStore(
    rootReducer,
)

export default store;
