import { combineReducers } from 'redux';
import accessFunctionality from './accessFunctionality';
import gender_blood_birth_religion_desh from './gender&blood&birth&religion&desh';
import member_and_staff from './member&staff';
import nameReducer from './nameReducer';
import permanentAddress from './PermanentAddress';
import presentAddress from './presentAddress';
import uploadingFile from './uploadingFile';
import user_id_and_email_and_mobile_no_and_image from './userId&email&mobileNo&image';
import user_position_and_joining_date_and_salary from './userPosition&joiningDate&salary';

export const dutypediaReducers = combineReducers({
    user_id_and_email_and_mobile_no_and_image,
    member_and_staff,
    name: nameReducer,
    gender_blood_birth_religion_desh,
    presentAddress,
    permanentAddress,
    uploadingFile,
    user_position_and_joining_date_and_salary,
    accessFunctionality
});
