import { combineReducers } from "redux";
import { employeeListReducers } from "./EmployeeList";

export const offlineReducers=combineReducers({
    employeeListReducers,
})

