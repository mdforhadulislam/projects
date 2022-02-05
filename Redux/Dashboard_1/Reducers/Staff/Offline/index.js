import { combineReducers } from 'redux';
import { birthDate_and_religion } from './birthDateAndReligion';
import { email_and_mobile_no } from './emailAndMobileNo';
import { gender_and_blood_group } from './genderAndBlood';
import { mamber_and_staff } from './MemberAndStaff';
import { nameReducers } from './nameReducers';
import { permanentAddress } from './permanentAddress';
import { position_and_joining_date } from './PositionAndJoiningDate';
import { presentAddress } from './presentAddress';
import { offline_user_salary_system } from './salarySystem';
import { upload_image_and_nationality } from './uploadImageAndNationality';
import { user_documentes } from './userDocumentes';

export const offlineReducers = combineReducers({
    name: nameReducers,
    email_and_mobile_no,
    mamber_and_staff,
    gender_and_blood_group,
    birthDate_and_religion,
    upload_image_and_nationality,
    user_documentes,
    presentAddress,
    permanentAddress,
    position_and_joining_date,
    offline_user_salary_system
});
