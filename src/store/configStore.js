import { legacy_createStore } from "redux";
import reducer from "./tasks";

const store = legacy_createStore(reducer);

export default store;