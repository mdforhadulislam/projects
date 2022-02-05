// import { createSlice } from "@reduxjs/toolkit";
import { OfflineAddFakeData } from '../../../Components/Dashboard_1/Group/fakeData/memberFakeData/OfflineAddFakeData';
import { DutypediaAddFakeData } from '../../../Components/Dashboard_1/Group/fakeData/memberFakeData/DutypediaAddFakeData';

const initialState = {
    memberList: [],
    dutypediaAddList: DutypediaAddFakeData,
    offlineAddList: OfflineAddFakeData,
    groupSelectUser: ''
};

const groupUserSelect = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GROUP_SELECT_USER': {
            const newState = {
                ...state,
                groupSelectUser: action.payload
            };
            return newState;
        }

        // member list reducer
        case 'LOAD_DATA_TO_MEMBER_LIST': {
            const newState = {
                ...state,
                memberList: action.payload
            };
            return newState;
        }
        case 'USER_REMOVE_FROM_MEMBER_LIST': {
            const newState = {
                ...state,
                memberList: state.memberList.filter((id) => id.id !== action.payload)
            };
            return newState;
        }

        // dutypedia user list reducer
        case 'MEMBER_LIST_DELETE_ITEM_ADD_TO_DUTYPEDIA': {
            const newSate = {
                ...state,
                dutypediaAddList: [...state.dutypediaAddList, action.payload]
            };
            return newSate;
        }
        case 'DUTYPEDIA_USER_ADD_TO_MEMBER_LIST': {
            const newSate = {
                ...state,
                memberList: [...state.memberList, ...action.payload]
            };
            return newSate;
        }
        case 'USER_REMOVE_FROM_DUTYPEDIA_LIST': {
            const newSate = {
                ...state,
                dutypediaAddList: state.dutypediaAddList.filter(
                    (id) => !action.payload.includes(id.id)
                )
            };
            return newSate;
        }

        // offline user list reducer
        case 'OFFLINE_USER_ADD_TO_MEMBER_LIST': {
            const newSate = {
                ...state,
                memberList: [...state.memberList, ...action.payload]
            };
            return newSate;
        }
        case 'USER_REMOVE_FROM_OFFLINE_LIST': {
            const newSate = {
                ...state,
                offlineAddList: state.offlineAddList.filter((id) => !action.payload.includes(id.id))
            };
            return newSate;
        }
        case 'MEMBER_LIST_DELETE_ITEM_ADD_TO_Offline': {
            const newSate = {
                ...state,
                offlineAddList: [...state.offlineAddList, action.payload]
            };
            return newSate;
        }

        default: {
            return state;
        }
    }
};

export default groupUserSelect;
