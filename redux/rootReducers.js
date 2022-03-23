import { combineReducers } from "redux";
import userReducer from "./fetchData/FecthReducer";
const RootReducers = combineReducers({
  users: userReducer,
});

export default RootReducers;