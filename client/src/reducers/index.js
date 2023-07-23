import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import PersonReducer from "./PersonReducer";

const rootReducer = combineReducers({
    people: PersonReducer,
    form : reduxForm
})

export default rootReducer;