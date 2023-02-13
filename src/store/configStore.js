import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./tasks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;