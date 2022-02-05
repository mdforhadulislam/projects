import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import ArrowBackIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon';
import SearchIcon from '../../../../../../Assets/images/dashboard/SearchIcon';
import { CheckBox } from '../../../../../../Utilities/Utilites';

Modal.setAppElement('#__next');
export default function AttendenceEmployee({
    attendenceEmployee,
    setAttendencesPopupForm,
    setAttendenceEmployee
}) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            overflow: 'none',
            padding: '0',
            background: 'none'
        }
    };
    return (
        <Modal
            isOpen={attendenceEmployee}
            onRequestClose={() => {
                setAttendencesPopupForm(true);
                setAttendenceEmployee(false);
            }}
            style={customStyles}>
            <div className="attendence__employee__container">
                <div className="attendence__employee__container__back__button">
                    <ArrowBackIcon />
                    Back
                </div>
                <div className="attendence__employee__container__search__box">
                    <div className="attendence__employee__container__search__box__title">
                        Select Your Employee For Attendence
                    </div>
                    <div className="attendence__employee__container__search__box__input">
                        <input type="text" id="search" />
                        <label htmlFor="search">
                            <SearchIcon />
                        </label>
                    </div>
                </div>
                <div className="attendence__employee__container__user__selsect__box">
                    <div className="attendence__employee__container__user__selsect__box__all__selsect__box">
                        <CheckBox title="Select All" />
                    </div>

                    <div className="attendence__employee__container__user__selsect__box__user__box">
                        <div className="single__user__box">
                            <div className="single__user__box__main">
                                <div className="single__user__box__main__checkBox">
                                    <CheckBox />
                                </div>
                                <div className="single__user__box__main__user__deatils">
                                    <div className="single__user__box__main__user__deatils__image__log"></div>
                                    <div className="single__user__box__main__user__deatils__name__id">
                                        <div className="name">Maliha Mouly</div>
                                        <div className="id">Id: 92973434</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attendence__employee__container__button">
                    <button>Create Now</button>
                    <button>Cancel</button>
                </div>
            </div>
        </Modal>
    );
}
