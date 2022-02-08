import {
    STAFF_LOGIN_REQUEST,
    STAFF_LOGIN_SUCCESS,
    STAFF_LOGIN_FAIL,
    STAFF_DELETE_REQUEST,
    STAFF_DELETE_SUCCESS,
    STAFF_DELETE_FAIL,
    STAFF_LOGOUT,
    STAFF_SHOW_REQUEST,
    STAFF_SHOW_SUCCESS,
    STAFF_SHOW_FAIL,
    CREATE_STAFF_REQUEST,
    CREATE_STAFF_SUCCESS,
    CREATE_STAFF_FAIL,
} from "../constants/staffConstants";

export const showStaffsReducer = (state = {}, action) => {
    switch (action.type) {
        case STAFF_SHOW_REQUEST:
            return {loading: true}
        case STAFF_SHOW_SUCCESS:
            return {loading: false, staffs: action.payload}
        case STAFF_SHOW_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const staffLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case STAFF_LOGIN_REQUEST:
            return {loading: true}
        case STAFF_LOGIN_SUCCESS:
            return {loading: false, staffInfo: action.payload}
        case STAFF_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case STAFF_LOGOUT:
            return {}
        default:
            return state
    }
}

export const createStaffReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_STAFF_REQUEST:
            return {loading: true}
        case CREATE_STAFF_SUCCESS:
            return {loading: false, data: action.payload}
        case CREATE_STAFF_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const deleteStaffReducer = (state = {}, action) => {
    switch (action.type) {
        case STAFF_DELETE_REQUEST:
            return {loading: true}
        case STAFF_DELETE_SUCCESS:
            return {loading: false, data: action.payload}
        case STAFF_DELETE_FAIL:
            return {}
        default:
            return state
    }
}