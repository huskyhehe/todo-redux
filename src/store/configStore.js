import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import reducer from "./tasks";

// const enhancer = composeWithDevTools({ 
//     trace: true,
// }); 

const enhancer = composeWithDevTools({
    trace: true
});

const store = legacy_createStore(
    reducer,
    enhancer(applyMiddleware(thunk))
);

export default store;