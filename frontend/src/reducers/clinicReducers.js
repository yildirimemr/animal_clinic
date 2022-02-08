import {
    GET_CUSTOMERS_REQUEST,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_FAIL,
    CREATE_RECORD_REQUEST,
    CREATE_RECORD_SUCCESS,
    CREATE_RECORD_FAIL,
    SEARCH_RECORD_REQUEST,
    SEARCH_RECORD_SUCCESS,
    SEARCH_RECORD_FAIL,
    SEARCH_RECORD_RESET,
    GET_RECORD_REQUEST,
    GET_RECORD_SUCCESS,
    GET_RECORD_FAIL,
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL,
    GET_ANIMAL_REQUEST,
    GET_ANIMAL_SUCCESS,
    GET_ANIMAL_FAIL,
    EDIT_CUSTOMER_REQUEST,
    EDIT_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_FAIL,
    EDIT_ANIMAL_REQUEST,
    EDIT_ANIMAL_SUCCESS,
    EDIT_ANIMAL_FAIL,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAIL,
    DELETE_ANIMAL_REQUEST,
    DELETE_ANIMAL_SUCCESS,
    DELETE_ANIMAL_FAIL,
} from "../constants/clinicConstants";


export const getCustomersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CUSTOMERS_REQUEST:
            return {loading: true}
        case GET_CUSTOMERS_SUCCESS:
            return {loading: false, customersData: action.payload}
        case GET_CUSTOMERS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getCustomerReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CUSTOMER_REQUEST:
            return {loading: true}
        case GET_CUSTOMER_SUCCESS:
            return {loading: false, customerData: action.payload}
        case GET_CUSTOMER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getAnimalReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ANIMAL_REQUEST:
            return {loading: true}
        case GET_ANIMAL_SUCCESS:
            return {loading: false, animalData: action.payload}
        case GET_ANIMAL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const editCustomerReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_CUSTOMER_REQUEST:
            return {editLoading: true}
        case EDIT_CUSTOMER_SUCCESS:
            return {editLoading: false, editMessage: action.payload}
        case EDIT_CUSTOMER_FAIL:
            return {editLoading: false, error: action.payload}
        default:
            return state
    }
}

export const editAnimalReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_ANIMAL_REQUEST:
            return {editLoading: true}
        case EDIT_ANIMAL_SUCCESS:
            return {editLoading: false, editMessage: action.payload}
        case EDIT_ANIMAL_FAIL:
            return {editLoading: false, error: action.payload}
        default:
            return state
    }
}

export const createRecordReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_RECORD_REQUEST:
            return {recordLoading: true}
        case CREATE_RECORD_SUCCESS:
            return {recordLoading: false, recordMessage: action.payload}
        case CREATE_RECORD_FAIL:
            return {recordLoading: false, recordError: action.payload}
        default:
            return state
    }
}

export const getRecordsReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_RECORD_REQUEST:
            return {loading: true}
        case SEARCH_RECORD_SUCCESS:
            return {loading: false, recordsData: action.payload}
        case SEARCH_RECORD_FAIL:
            return {loading: false, error: action.payload}
        case SEARCH_RECORD_RESET:
            return {}
        default:
            return state
    }
}

export const getRecordReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RECORD_REQUEST:
            return {recordLoading: true}
        case GET_RECORD_SUCCESS:
            return {recordLoading: false, recordData: action.payload}
        case GET_RECORD_FAIL:
            return {recordLoading: false, recordError: action.payload}
        default:
            return state
    }
}
