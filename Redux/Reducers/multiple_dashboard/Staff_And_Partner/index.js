// main reducer state 
import { combineReducers } from 'redux';
import dutypediaReducers from './Dutypedia';
import employeeDocuments from './Dutypedia/employeesDocuments';
import create_online_user from './Dutypedia/onlineUser';
import { offlineReducers } from './Offline';
import { offline_user } from './Offline/offlineUser';


const staff_and_partner = combineReducers({
   dutypediaReducers,
   offlineReducers,
   onlineEmployeeDocuments: employeeDocuments,
   onlineUser: create_online_user,
   offlineUser: offline_user
});

export default staff_and_partner;