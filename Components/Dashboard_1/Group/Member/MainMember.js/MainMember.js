import React, { useState } from 'react';

import Member from '../Member';
import plus from '../../../../../Assets/images/mentor_img/plus.svg';

import { useSelector } from 'react-redux';
import AddMember from '../AddMember/AddMember';

const MainMember = () => {
    const [createMemberList, setCreateMemberList] = useState(false);

    const memberList = useSelector((state) => state.groupUserSelect.memberList);

    return (
        <div>
            {createMemberList === false && (
                <div
                    id="created-book-list"
                    className="created-book-list text-center"
                    onClick={() => {
                        setCreateMemberList(true);
                    }}>
                    {/* <i className=""><FontAwesomeIcon icon={faPlus} /></i> */}
                    <img src={plus} alt="plus" className="member_add_icon img-fluid" />
                    <h3>Create A Member List</h3>
                </div>
            )}

            {createMemberList && (
                <div>
                    {memberList.length === 0 ? (
                        <AddMember setCreateMemberList={setCreateMemberList} />
                    ) : (
                        <Member />
                    )}
                </div>
            )}
        </div>
    );
};

export default MainMember;
