
export const addGroupSelectUser = (payload) => {
    return {
        type: 'ADD_GROUP_SELECT_USER',
        payload
    }
}
// member list action
export const loadDataToMemberList = (payload) => {
    return {
        type: 'LOAD_DATA_TO_MEMBER_LIST',
        payload
    }
}

export const userRemoveFromMemberList = (payload) => {
    return {
        type: 'USER_REMOVE_FROM_MEMBER_LIST',
        payload
    }
}

// dutypedia list action
export const memberListDeleteItemAddToDutypedia = (payload) => {
    return {
        type: 'MEMBER_LIST_DELETE_ITEM_ADD_TO_DUTYPEDIA',
        payload
    }
}

export const dutypediaUserAddToMemberList = (payload) => {
    return {
        type: 'DUTYPEDIA_USER_ADD_TO_MEMBER_LIST',
        payload
    }
}
export const dutypediaUserAllSelectAddToMemberList = (payload) => {
    return {
        type: 'DUTYPEDIA_USER_ALL_SELECT_ADD_TO_MEMBER_LIST',
        payload
    }
}

export const userRemoveFromDutypediaList = (payload) => {
    return {
        type: 'USER_REMOVE_FROM_DUTYPEDIA_LIST',
        payload
    }
}

// offline list action
export const offlineUserAddToMemberList = (payload) => {
    return {
        type: 'OFFLINE_USER_ADD_TO_MEMBER_LIST',
        payload
    }
}

export const userRemoveFromOfflineList = (payload) => {
    return {
        type: 'USER_REMOVE_FROM_OFFLINE_LIST',
        payload
    }
}

export const memberListDeleteItemAddToOffline = (payload) => {
    return {
        type: 'MEMBER_LIST_DELETE_ITEM_ADD_TO_Offline',
        payload
    }
}

