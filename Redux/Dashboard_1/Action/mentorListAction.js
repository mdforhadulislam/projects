// load mentor list data
export const mentorListLoadData = (payload) => {
    return {
        type: 'MENTOR_LIST_LOAD_DATA',
        payload
    }
}

// main mentor list
export const removeMentorFromMentorList = (payload) => {
    return {
        type: 'REMOVE_MENTOR_FROM_MENTOR_LIST',
        payload
    }
}

export const removeMentorAddToDutypediaAddList = (payload) => {
    return {
        type: 'REMOVE_MENTOR_ADD_TO_DUTYPEDIA_ADD_LIST',
        payload
    }
}

export const removeMentorAddToOfflineAddList = (payload) => {
    return {
        type: 'REMOVE_MENTOR_ADD_TO_OFFLINE_ADD_LIST',
        payload
    }
}

// dutypedia add list
export const addMentorDutypediaToMentorList = (payload) => {
    return {
        type: 'ADD_MENTOR_DUTYPEDIA_TO_MENTOR_LIST',
        payload
    }
}
export const removeMentorFromDutypediaAddlist = (payload) => {
    return {
        type: 'REMOVE_MENTOR_FROM_DUTYPEDIA_ADD_LIST',
        payload
    }
}

// offline add list
export const addMentorOfflineToMentorList = (payload) => {
    return {
        type: 'ADD_MENTOR_OFFLINE_TO_MENTOR_LIST',
        payload
    }
}

export const removeMentorFromOfflineAddList = (payload) => {
    return {
        type: 'REMOVE_MENTOR_FROM_OFFLINE_ADD_LIST',
        payload
    }
}