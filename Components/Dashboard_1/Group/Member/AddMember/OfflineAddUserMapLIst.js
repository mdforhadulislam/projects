import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import user1 from '/Assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
const OfflineAddUserMapList = (props) => {
    const { _id } = props.addMember;
    const [itemIsCheck, setItemIsCheck] = useState(false);
    const [newCheck, setNewCheck] = useState(false);

    const handleItemClick = () => {
        setItemIsCheck(!itemIsCheck);
    };
    const handleNewCheck = () => {
        setNewCheck(!newCheck);
    };

    useEffect(() => {
        setNewCheck(true);
    }, [props.allCheck === false]);

    const check = true;
    const notCheck = false;
    return (
        <div>
            <div className="member-lists member-list-online">
                <div className="member__item">
                    {props.allCheck === true && (
                        <label for={_id} className="checkbox-container">
                            <input
                                id={_id}
                                type="checkbox"
                                checked={newCheck ? check : notCheck}
                                onClick={handleNewCheck}
                                onChange={() =>
                                    props.handleAllSelectCount(props.addMember, newCheck)
                                }
                                // onChange={() => console.log('all select')}
                            />
                            <span className="checkmark checkmark-down"></span>
                        </label>
                    )}

                    {props.allCheck === false && (
                        <label for={_id} className="checkbox-container">
                            <input
                                id={_id}
                                type="checkbox"
                                checked={itemIsCheck ? check : notCheck}
                                onClick={handleItemClick}
                                onChange={() => props.handleCount(props.addMember)}
                            />
                            <span className="checkmark checkmark-down"></span>
                        </label>
                    )}

                    {/* // )} */}

                    <div className="member__item__details">
                        <Image src={user1} width={50} height={50} alt="men 1" />

                        <div className="member__item__details__personal">
                            <h4
                                className="member__item__details-name"
                                onClick={() => console.log(_id)}>
                                {props.addMember.name}
                            </h4>
                            {/* <p className="member__item__details-id">Id : 92973434</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfflineAddUserMapList;
