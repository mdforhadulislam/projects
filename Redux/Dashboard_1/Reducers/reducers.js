import { combineReducers } from 'redux';
import dutypediaReducers from '../../Dashboard_1/Reducers/Staff/Dutypedia';
import create_online_user from '../../Dashboard_1/Reducers/Staff/Dutypedia/onlineUser';
import { offlineReducers } from '../../Dashboard_1/Reducers/Staff/Offline';
import { offline_user } from '../../Dashboard_1/Reducers/Staff/Offline/offlineUser';
import appointmentReducers from './appointmentReducers';
import expensesReducers from './expensesReducers';
import groupUserSelect from './groupUserSelect';
import mentorListReducer from './mentorListReducer';
import employeeDocuments from './Staff/Dutypedia/employeesDocuments';
const reducers = combineReducers({
    expensesReducers,
    appointmentReducers,
    groupUserSelect,
    mentorListReducer,
    dutypedia: dutypediaReducers,
    onlineEmployeeDocuments: employeeDocuments,
    onlineUser: create_online_user,
    offline: offlineReducers,
    offlineUser: offline_user
});

export default reducers;
