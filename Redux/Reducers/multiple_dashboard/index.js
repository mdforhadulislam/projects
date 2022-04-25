// main reducer state 
import { combineReducers } from 'redux';
import appointment from './Appointment';
import dashboard from './Dashbord';
import expenses from './Expenses';
import group from './Group';
import notice from './Notice';
import staff_and_partner from './Staff_And_Partner';

const multiple_dashboard = combineReducers({
   appointment,
   dashboard,
   expenses,
   group,
   notice,
   staff_and_partner
});

export default multiple_dashboard;