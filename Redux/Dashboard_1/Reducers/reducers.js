import { combineReducers } from 'redux';
import expensesReducers from './expensesReducers';
import appointmentReducers from './appointmentReducers';
import workOutRoutineReducers from './Routine/workOutRoutineReducers';
import groupUserSelect from './groupUserSelect';
import mentorListReducer from './mentorListReducer';
import create_online_user from '../../Dashboard_1/Reducers/Dutypedia/EmployeeList/onlineUser';
import { dutypediaReducers } from '../../Dashboard_1/Reducers/Dutypedia/index';
import { offline_user } from '../../Dashboard_1/Reducers/Offline/EmployeeList/offlineUser';
import { offlineReducers } from '../../Dashboard_1/Reducers/Offline/index';
const reducers = combineReducers({
    expensesReducers,
    appointmentReducers,
    workOutRoutineReducers,
    groupUserSelect,
    mentorListReducer,
    dutypedia: dutypediaReducers,
    onlineUser: create_online_user,
    offline: offlineReducers,
    offlineUser: offline_user
});

export default reducers;
