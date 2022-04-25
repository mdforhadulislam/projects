import React from 'react';
import AdAccepted from '../../../Components/educational_dashboard/admission/AdAccepted';
import AdmissionAcpted from "../../../Components/educational_dashboard/admission/AdmissionAcpted";
import AdmissionCanceled from "../../../Components/educational_dashboard/admission/AdmissionCanceled";
import AdmitedSuccess from "../../../Components/educational_dashboard/admission/AdmitedSuccess";
import CancelPop from "../../../Components/educational_dashboard/admission/CancelPop";
import ClassSection from "../../../Components/educational_dashboard/admission/ClassSection";
import NoAdmission from "../../../Components/educational_dashboard/admission/NoAdmission";
import RequireDoc from "../../../Components/educational_dashboard/admission/RequireDoc";
import SetAdReqDoc from "../../../Components/educational_dashboard/admission/SetAdReqDoc";
import StdOfflineAccept from "../../../Components/educational_dashboard/admission/StdOfflineAccept";

function index() {
   return (
      <>
         <AdAccepted></AdAccepted>
         <AdmissionAcpted></AdmissionAcpted>
         <AdmissionCanceled></AdmissionCanceled>
         <AdmitedSuccess></AdmitedSuccess>
         <CancelPop></CancelPop>
         <ClassSection></ClassSection>
         <NoAdmission></NoAdmission>
         <SetAdReqDoc></SetAdReqDoc>
         <RequireDoc></RequireDoc>
         <StdOfflineAccept></StdOfflineAccept>
      </>
   )
}

export default index