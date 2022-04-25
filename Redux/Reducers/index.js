// main reducer state 
import { combineReducers } from 'redux';
import educational_dashboard from "./educational_dashboard";
import medical_dashboard from "./medical_dashboard";
import multiple_dashboard from "./multiple_dashboard";
import realstate_dashboard from "./realstate_dashboard";
import rent_dashboard from "./rent_dashboard";
import shop_dashboard from "./shop_dashboard";

const reducers = combineReducers({
   multiple_dashboard,
   educational_dashboard,
   medical_dashboard,
   rent_dashboard,
   shop_dashboard,
   realstate_dashboard,
});

export default reducers;

