import React, { useEffect, useState } from "react";

const DutypediaAddUserMapList = (props) => {
  const [itemIsCheck, setItemIsCheck] = useState(false);
  const [newCheck, setNewCheck] = useState(false);
  const { id, name, user } = props.addItem;
  const [selectRole, setSelectRole] = useState("");
  const [roleArray, setRoleArray] = useState({});

  console.log(props.allCheck);

  const handleItemClick = () => {
    setItemIsCheck(!itemIsCheck);
  };

  const handleNewCheck = (id) => {
    setNewCheck(!newCheck);
  };

  useEffect(() => {
    setNewCheck(true);
  }, [props.allCheck === false]);

  const check = true;
  const notCheck = false;

  const handleSelectItem = () => {
    props.handleCount({ name: name, role: selectRole, id: id, user: user });
  };

  const handleSelectAll = () => {
    props.handleAllSelectCount(
      { name: name, role: selectRole, id: id, user: user },
      newCheck
    );
  };

  const handleUpdateRole = (e) => {
    props.handleMentorRole(e.target.value, props.addItem);
    setSelectRole(e.target.value);
  };

  return (
    <div className="member-lists member-list-online ">
      <div className="member__item">
        {/* <label for="online" className="checkbox-container">
              <input id="online" type="checkbox" />
              <span className="checkmark checkmark-down"></span>
            </label> */}

        {props.allCheck === true && (
          <label for={id} className="checkbox-container">
            <input
              id={id}
              type="checkbox"
              checked={newCheck ? check : notCheck}
              onClick={handleNewCheck}
              onChange={handleSelectAll}
            />
            <span className="checkmark checkmark-down"></span>
          </label>
        )}

        {props.allCheck === false && (
          <label for={id} className="checkbox-container">
            <input
              id={id}
              type="checkbox"
              checked={itemIsCheck ? check : notCheck}
              onClick={handleItemClick}
              onChange={handleSelectItem}
            />
            <span className="checkmark checkmark-down"></span>
          </label>
        )}

        <div className="member__item__details">
          <img
            src="../assets/images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
            alt="men 1"
          />
          <img
            id="isOnline"
            src="../assets/images/icons/Group 9059.svg"
            alt="message"
          />
          <div className="member__item__details__personal">
            <h4 className="member__item__details-name">{name}</h4>
            <p className="member__item__details-id">Id : 92973434</p>
          </div>
          <input
            className="mentor_role"
            type="text"
            name=""
            id=""
            placeholder="example: computer expert"
            onBlur={handleUpdateRole}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DutypediaAddUserMapList;
