import { DutypediaAddFakeData } from '../../../Components/Dashboard_1/Group/fakeData/memberFakeData/DutypediaAddFakeData';
import { OfflineAddFakeData } from '../../../Components/Dashboard_1/Group/fakeData/memberFakeData/OfflineAddFakeData';

const initialSate = {
    mentorList: [
        // {
        //   id: "ajdsoifja9",
        //   name: "Sofik",
        //   user: "dutypedia",
        // },
    ],
    dutypediaAddList: DutypediaAddFakeData,
    offlineAddList: OfflineAddFakeData
};

const mentorListReducer = (state = initialSate, action) => {
    switch (action.type) {
        case 'MENTOR_LIST_LOAD_DATA': {
            const newState = {
                ...state,
                mentorList: action.payload
            };
            return newState;
        }
        // mentor list
        case 'REMOVE_MENTOR_FROM_MENTOR_LIST': {
            const newState = {
                ...state,
                mentorList: state.mentorList.filter((id) => id.id !== action.payload)
            };
            return newState;
        }

        // dutypedia add list
        case 'ADD_MENTOR_DUTYPEDIA_TO_MENTOR_LIST': {
            const newState = {
                ...state,
                mentorList: [...state.mentorList, ...action.payload]
            };
            return newState;
        }

        case 'REMOVE_MENTOR_FROM_DUTYPEDIA_ADD_LIST': {
            const newState = {
                ...state,
                dutypediaAddList: state.dutypediaAddList.filter(
                    (id) => !action.payload.includes(id.id)
                )
            };
            return newState;
        }

        case 'REMOVE_MENTOR_ADD_TO_DUTYPEDIA_ADD_LIST': {
            const newSate = {
                ...state,
                dutypediaAddList: [...state.dutypediaAddList, action.payload]
            };
            return newSate;
        }

        // offline add list
        case 'ADD_MENTOR_OFFLINE_TO_MENTOR_LIST': {
            const newState = {
                ...state,
                mentorList: [...state.mentorList, ...action.payload]
            };
            return newState;
        }

        case 'REMOVE_MENTOR_FROM_OFFLINE_ADD_LIST': {
            const newState = {
                ...state,
                offlineAddList: state.offlineAddList.filter((id) => !action.payload.includes(id.id))
            };
            return newState;
        }

        case 'REMOVE_MENTOR_ADD_TO_OFFLINE_ADD_LIST': {
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

export default mentorListReducer;
