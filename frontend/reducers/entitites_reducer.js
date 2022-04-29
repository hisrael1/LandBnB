import { combineReducers } from "redux";

import usersReducer from "./users_reducer";

// did I do this right?
const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;